/*
 * Deployment-only public data settings.
 * The public deployment reads live JSON and public uploads from the HTTPS
 * storage host. Private editor files are never referenced here.
 */
window.BLROCKY_CONFIG = window.BLROCKY_CONFIG || {
  dataBaseUrl: "https://storage.blrocky.com/data",
  assetBaseUrl: "https://storage.blrocky.com"
};
