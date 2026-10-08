# FocusTube

A Chrome extension that removes YouTube distractions (home feed, recommendations,
comments, Shorts, sidebar, end cards) so only the video you are watching remains.
Each feature can be toggled from the popup.

# How it works
- `manifest.json` - tells Chrome what the extension is and where it runs
- `content.css` - hides YouTube elements when a class is present on `<html>`
- `content.js`- reads saved settings and adds/removes those classes
- `popup.html/css/js` - the toggle menu; saves choices with `chrome.storage`

# Install (developer mode)
1. Open `chrome://extensions`
2. Turn on *Developer mode*
3. Click *Load unpacked* and select this folder
