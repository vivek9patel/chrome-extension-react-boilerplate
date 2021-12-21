# Chrome Extension with React.js Boilerplate

[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/vivek9patel/chrome-extension-react-boilerplate)
[![License](https://img.shields.io/github/license/yilber/readme-boilerplate.svg)](https://github.com/vivek9patel/chrome-extension-react-boilerplate/blob/master/LICENCE)

Boilerplate for your chrome extension with react.js and webpack

## Background

> Creating a file structure for developing chrome-extension takes forever, especially if you want to integrate react to generate popup starting off from scratch. So, I decided to make a template to help me speed up things a little bit.

## Installation

Open your terminal and type...

### Clone in your system

```sh
git clone https://github.com/vivek9patel/chrome-extension-react-boilerplate.git
```

```sh
cd chrome-extension-react-boilerplate
```

### Install dependencies & compile code with webpack

```sh
yarn
```

```sh
yarn run dev
```

## File structure

After all the above steps, you should able to see this file strucutre in the root directory:

```text
chrome-extension-react-boilerplate
├── README.md
├── node_modules
├── dist
│   ├── background.js
│   ├── icons
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── popup.js.LICENSE.txt
├── package.json
├── public
│   ├── icons
│   │   ├── 128.png
│   │   ├── 16.png
│   │   └── 48.png
│   ├── manifest.json
│   └── popup.html
├── src
│   ├── chrome
│   │   └── background.js
│   ├── popup.css
│   └── popup.jsx
├── webpack.config.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

## How to use

- By running the above commands webpack will generate `dist` folder in the root directory.
- Now, open up your chrome browser and type `chrome://extensions` in the URL bar.
- Toggle developer mode to on and click on the _Load Unpacked_ button.
- This will open a window to select folder. Go ahed and open the `dist` folder from the root directory, and that will load this extension in the chrome!

## Bugs

If you have questions, feature requests or a bug you want to report, please click [here](https://github.com/vivek9patel/chrome-extension-react-boilerplate/issues) to file an issue.

## Author

- [**vivek9patel**](https://www.linkedin.com/in/vivek9patel/)
- [![GitHub followers](https://img.shields.io/github/followers/vivek9patel.svg?style=social)](https://github.com/vivek9patel)
- [![Twitter Follow](https://img.shields.io/twitter/follow/vivek9patel.svg?style=social)](https://twitter.com/vivek9patel)

## Support

Like what you see? Keep me awake at night by buying me a coffee or two.

<a href="https://www.buymeacoffee.com/vivek9patel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 45px !important;width: 157px !important;" ></a>
