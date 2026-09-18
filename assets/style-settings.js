/* Shared by the static homepage and the editor's text previews. */
(() => {
  const properties = new Set(('color background-color font-family font-size font-weight font-style font-variant font-stretch line-height text-align text-transform text-indent text-decoration text-decoration-color text-decoration-style text-decoration-thickness text-underline-offset text-shadow word-spacing white-space overflow-wrap word-break hyphens opacity border-color border-style border-width border-radius').split(' '));
  const tracked = new WeakMap();
  let nextId = 0;
  const sheet = document.createElement('style');
  document.head.append(sheet);
  const rules = new Map();
  const declarations = (raw) => {
    if (/[<>{}@\\]|url\s*\(|expression\s*\(/i.test(String(raw || ''))) return '';
    const parser = document.createElement('span');
    parser.style.cssText = String(raw || '');
    return Array.from(parser.style).filter((name) => properties.has(name)).map((name) => `${name}:${parser.style.getPropertyValue(name)} !important;`).join('');
  };
  const apply = (node, style = {}) => {
    if (!node) return;
    let id = tracked.get(node);
    if (!id) { id = `custom-style-${++nextId}`; tracked.set(node, id); node.classList.add(id); }
    const normal = declarations(style.rawCss);
    const hover = declarations(style.rawHoverCss);
    // Text sizing on touch devices must not change just because a tap retains hover.
    rules.set(id, `.${id}{${normal}} @media (hover:hover) and (pointer:fine){.${id}:hover:not(:has(a:hover)),.${id}:focus-visible,.${id} a:hover,.${id} a:focus-visible{${hover}}}`);
    sheet.textContent = [...rules.values()].join('\n');
  };
  window.BLStyle = { apply, declarations };
})();
