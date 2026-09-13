/*
 * Public data settings.
 * Production reads live JSON and public uploads from the HTTPS storage host.
 * Local previews fall back to repo-relative JSON/assets so localhost review
 * does not depend on production storage CORS.
 */
(() => {
  const localHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
  const isLocalPreview = window.location.protocol === "file:" || localHosts.has(window.location.hostname);

  window.BLROCKY_CONFIG = window.BLROCKY_CONFIG || (
    isLocalPreview
      ? {}
      : {
          dataBaseUrl: "https://storage.blrocky.com/data",
          assetBaseUrl: "https://storage.blrocky.com"
        }
  );
})();
