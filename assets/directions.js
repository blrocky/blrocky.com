(() => {
  const dialog = document.createElement('dialog');
  dialog.className = 'directions-picker';
  dialog.setAttribute('aria-labelledby', 'directions-picker-title');
  dialog.innerHTML = `<form method="dialog"><button class="directions-close" aria-label="Close directions" title="Close">&#215;</button></form><h2 id="directions-picker-title">Open directions</h2><p class="directions-address"></p><div class="directions-options"></div><label class="directions-remember"><input type="checkbox"> Put my choice first next time</label>`;
  document.body.append(dialog);
  const address = dialog.querySelector('.directions-address');
  const options = dialog.querySelector('.directions-options');
  let trigger;
  const providers = {
    apple: ['Apple Maps', (q) => `https://maps.apple.com/?daddr=${encodeURIComponent(q)}`],
    google: ['Google Maps', (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`],
    osm: ['OpenStreetMap', (q) => `https://www.openstreetmap.org/search?query=${encodeURIComponent(q)}`],
    mapquest: ['MapQuest', (q) => `https://www.mapquest.com/search/${encodeURIComponent(q)}`]
  };
  const order = () => {
    const ua = navigator.userAgent;
    let first = /OPR\/|Opera/i.test(ua) ? 'osm' : /Chrome|Chromium|CriOS/i.test(ua) ? 'google' : /Safari/i.test(ua) ? 'apple' : 'osm';
    try { const saved = localStorage.getItem('blrocky-map-provider'); if (providers[saved]) first = saved; } catch (_) {}
    return [first, ...Object.keys(providers).filter((key) => key !== first)];
  };
  const queryFor = (anchor) => {
    if (anchor.dataset.locationQuery) return anchor.dataset.locationQuery;
    try {
      const url = new URL(anchor.href, location.href);
      if (url.hostname === 'www.openstreetmap.org' || url.hostname === 'openstreetmap.org') return url.searchParams.get('query') || '';
    } catch (_) {}
    return '';
  };
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor || anchor.closest('.directions-picker') || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const query = queryFor(anchor);
    if (!query || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    trigger = anchor;
    address.textContent = query;
    options.replaceChildren();
    for (const key of order()) {
      const link = document.createElement('a');
      link.textContent = providers[key][0];
      link.href = providers[key][1](query);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.addEventListener('click', () => {
        try {
          if (dialog.querySelector('input').checked) localStorage.setItem('blrocky-map-provider', key);
          else localStorage.removeItem('blrocky-map-provider');
        } catch (_) {}
        dialog.close();
      });
      options.append(link);
    }
    if (/Android/i.test(navigator.userAgent)) {
      const native = document.createElement('a');
      native.href = `geo:0,0?q=${encodeURIComponent(query)}`;
      native.textContent = 'Choose an installed map app';
      options.append(native);
    }
    dialog.showModal();
    window.dispatchEvent(new Event('blrocky-directions-open'));
  });
  dialog.addEventListener('close', () => {
    trigger?.focus({ preventScroll: true });
    window.dispatchEvent(new Event('blrocky-directions-close'));
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
})();
