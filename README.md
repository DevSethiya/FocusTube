# FocusTube

A lightweight Chrome extension that hides YouTube distractions so you only see the video you are watching.


# Features

- Hide the home feed, recommended videos, comments, Shorts, sidebar and end-screen cards
- Toggle each feature on or off from a simple popup
- Changes apply instantly, with no page refresh
- Settings are saved automatically and synced through your Chrome account
- No tracking, no analytics, no external servers


# Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/DevSethiya/focus-tube.git
   ```
2. Open `chrome://extensions` in Chrome (or `edge://extensions` in Edge).
3. Turn on **Developer mode** (top-right).
4. Click **Load unpacked** and select the `focus-tube` folder.
5. Open YouTube and refresh the page.


# Usage

Click the FocusTube icon in the browser toolbar and tick or untick the options. All options are on by default.


# How It Works

```
Popup toggle → chrome.storage → content.js → class on <html> → content.css hides the element
```

- `popup.js` saves each toggle using `chrome.storage.sync`.
- `content.js` runs on YouTube and adds or removes classes (such as `fg-hideComments`) on the `<html>` element.
- `content.css` hides elements only while the matching class is present.

Classes are placed on `<html>` because YouTube does not fully reload when you switch videos, so they persist across navigation.


## Tech Stack

HTML, CSS, JavaScript, Chrome Extensions API (Manifest V3)


## Limitations

YouTube occasionally changes its page structure, so the selectors in `content.css` may need updating. Works on `youtube.com` in Chromium-based browsers (Chrome, Edge, Brave).


# Contributing

Contributions are welcome, whether it's a bug fix, a new feature or an improvement to the docs.

1. Fork this repository.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request describing what you changed and why.

Found a bug? Please [open an issue](https://github.com/DevSethiya/focus-tube/issues) with your browser version and a screenshot of the YouTube page. If YouTube has renamed an element, include the element name from Inspect.


# Open for Collaboration

I'm a Computer Science student interested in AI, machine learning and web development, and I'm open to collaborating on projects, learning from other developers and receiving feedback on this one. If you'd like to work together, get in touch:

- Email: [devsethiya2007@gmail.com](mailto:devsethiya2007@gmail.com)
- LinkedIn: [Dev Sethiya](https://www.linkedin.com/in/dev-sethiya-242523430)
- GitHub: [@DevSethiya](https://github.com/DevSethiya)


# License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.


# Acknowledgements

- Inspired by distraction-free YouTube extensions such as Unhook.
- Built using the [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions).
- Developed as a learning project with the assistance of AI tools (Claude by Anthropic).

# Disclaimer

FocusTube is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google. YouTube is a trademark of Google LLC.
