
const DEFAULTS = {
  hideHome: true,
  hideRecs: true,
  hideComments: true,
  hideShorts: true,
  hideSidebar: true,
  hideEndCards: true
};

function applySettings(settings) {
  for (const key of Object.keys(DEFAULTS)) {
    document.documentElement.classList.toggle("fg-" + key, !!settings[key]);
  }
}

chrome.storage.sync.get(DEFAULTS, applySettings);

chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(DEFAULTS, applySettings);
});
