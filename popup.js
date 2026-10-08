const DEFAULTS = {
  hideHome: true, hideRecs: true, hideComments: true,
  hideShorts: true, hideSidebar: true, hideEndCards: true
};


chrome.storage.sync.get(DEFAULTS, (settings) => {
  for (const key of Object.keys(DEFAULTS)) {
    const box = document.getElementById(key);
    box.checked = settings[key];
    
    box.addEventListener("change", () => {
      chrome.storage.sync.set({ [key]: box.checked });
    });
  }
});
