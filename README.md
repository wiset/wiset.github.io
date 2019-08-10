[![Social Manager Tools: IG BOT](https://raw.githubusercontent.com/social-manager-tools/socialmanagertools-twbot/nightly/.github/assets/smt_twbot_logo.png)](https://socialmanager.tools)

# 🤖 Social Manager Tools: 🐣 Twitter Bot API

[![](https://img.shields.io/badge/version-v0.10.0--nightly.20190810-lightgrey.svg)](https://github.com/social-manager-tools/socialmanagertools-twbot/releases) [![](https://img.shields.io/npm/v/@social-manager-tools/twbot.svg)](https://www.npmjs.com/package/@social-manager-tools/twbot) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://img.shields.io/badge/powered%20by-puppeteer-46aef7.svg)](https://github.com/GoogleChrome/puppeteer) [![](https://snyk.io/test/npm/@social-manager-tools/twbot/badge.svg)](https://snyk.io/test/github/social-manager-tools/socialmanagertools-twbot)

> This library (including bot and API methods) allow you to increase visits, likes and followers on your social profile through different algorithms and offers API for developers to include custom bot functionality in their  own applications. You will increase likes on your tweets and your followers!

> ⛔ **DISCLAIMER**: This is an **unofficial** library and offers no warranty! The developers and contributors of the project do not assume any responsibility in case of ban of your account. Use of twitter bots does not comply with the terms of the service: use this software at your own risk. A "bot" is legal software, but the use of a bot continuously violates the terms of use of Twitter and you risk a: __soft ban__ (such as limited actions or follow-up) or you risk __ban__ with suspension for a few days (or permanent). All trademarks and logos belong to their respective owners.

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours a week or in my spare time and try to keep it up to date and working. I do not intend to charge the basic features, but this cannot be done without your financial support, even small. There are professional bots with closed source on the Internet that save passwords on the cloud for €14/month: we want to protect your passwords and offer you a better product than others. A lower donation would allow continuous development, ever better quality and the realization of this dream. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg)](https://www.paypal.me/ptkdev) [![](https://img.shields.io/badge/donate-patreon-F87668.svg)](https://www.patreon.com/ptkdev) [![](https://img.shields.io/badge/buy%20me-coffee-4B788C.svg)](https://ko-fi.com/ptkdev)

![](https://img.shields.io/badge/bitcoin-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg) ![](https://img.shields.io/badge/ethereum-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg)

## 📎 Menu
- 💡 [Features](#-features)
- 💾 Installation:
	- 🔨 [Install From Source](http://docs.socialmanager.tools/twbot/installation/source/README.md)
	- 🔨 [Install From NPM](http://docs.socialmanager.tools/twbot/installation/npm/README.md)
	- 👨‍💻 [Desktop App](http://docs.socialmanager.tools/gui/installation/README.md) (Windows, Linux, Mac)
	- 🦀 [Raspberry PI](http://docs.socialmanager.tools/twbot/installation/raspberry/README.md) (Raspbian 9)
	- 🐧 [Linux Server](http://docs.socialmanager.tools/twbot/installation/linux/README.md) (Debian 9 Server)
	- 🐳 [Docker](http://docs.socialmanager.tools/twbot/installation/docker/README.md)
- 🔑 Configs:
	- 🔌 [VPN/Proxy](http://docs.socialmanager.tools/twbot/configs/vpn-proxy/README.md)
	- 💿 [List of Mode](http://docs.socialmanager.tools/twbot/configs/modes/README.md)
	- 📀 [How set Multi-account](http://docs.socialmanager.tools/twbot/configs/multiaccount/README.md)
- 🚽 [Documentation](https://github.com/social-manager-tools/socialmanagertools-docs/blob/master/README.md) (I hate writing it so, please, read it)
- 📚 [API Documentation](http://docs.socialmanager.tools/twbot/api/README.md) (How to create your personal bot or mode)
- 💻 [Developers Guidelines](http://docs.socialmanager.tools/developers/guidesline/README.md) (If you want to contribute)
- 🐛 [Known Bugs](https://github.com/social-manager-tools/socialmanagertools-twbot/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
	- 🐦 [Telegram group](http://telegram.ptkdev.io)
	- 🐔 [Discord](http://discord.ptkdev.io)
	- 🐓 [Slack](http://slack.ptkdev.io)
	- 🕊 [Medium](http://blog.ptkdev.io)
	- 🐤 [Twitter](http://twitter.ptkdev.io)

## 🔖 Screenshot
[![](https://raw.githubusercontent.com/social-manager-tools/socialmanagertools-twbot/master/.github/assets/screenshot/smt_twbot_screenshot.gif)](#)

## 💡 Features
* [✔️] Easy to use
* [✔️] Login
* [✔️] 2FA (bad location)
* [✔️] 2FA (sms pin enabled)
* [✔️] Multi-Session
* [✔️] Multi-Platform (Windows 10, Mac OSX, Linux and Raspberry PI)
* [✔️] Error management feature (bad pin, bad password)
* [✔️] Screenshot and Verbose logger
* [✔️] Like Mode Realistic: bot selects a random hashtag from a config list and likes fast 10-12 tweets, it sleeps 15-20min and repeats this.
* [✔️] RT Mode Realistic: bot selects a random hashtag from a config list and rt fast 10-12 tweets, it sleeps 15-20min and repeats this.

## 👨‍💻 Desktop setup (GUI)
1. Download [Social Manager Tools](https://github.com/social-manager-tools/social-manager-tools/releases) GUI.
2. Run the application.
3. If it works add a star 🌟 at this project ❤️
4. If you want to help me: **donate on [paypal](http://paypal.ptkdev.io)/[ko-fi](http://coffee.ptkdev.io)** or become a **[backer on patreon](http://patreon.ptkdev.io)**.

## 🔨 Fast usage (Source Code)
1. Download [stable](https://github.com/social-manager-tools/socialmanagertools-twbot/archive/master.zip), [beta](https://github.com/social-manager-tools/socialmanagertools-twbot/archive/beta.zip) or [nightly](https://github.com/social-manager-tools/socialmanagertools-twbot/archive/nightly.zip) and extract it.
2. Download [Node.js](https://nodejs.org/it/) (LTS release) and install it.
3. Run `npm install` in `socialmanagertools-twbot` folder.
4. Remove `.tpl` suffix from `config.js.tpl` file in `configs` folder and fill it properly.
5. Start the bot via `npm run start`
6. If it works add a star 🌟 at this project ❤️
7. If you want to help me: **donate on [paypal](http://paypal.ptkdev.io)/[ko-fi](http://coffee.ptkdev.io)** or become a **[backer on patreon](http://patreon.ptkdev.io)**.

## 🔧 Fast usage (NPM Module)
1. Run `npm install @social-manager-tools/twbot@latest --save` (Available: @latest, @beta and @nightly)
2. Get `config.js` file from `/node_modules/@social-manager-tools/twbot/configs/` folder.
3. Remove `.tpl` suffix from `config.js.tpl` file in `configs` folder and fill it properly.
4. On your code require library, config and run bot, example:
```javascript
const config = require ("./config");
const Bot = require("@social-manager-tools/twbot");
let bot = new Bot(config);

(async () => {
	await bot.start();

	let api = await bot.api();

	let response = await api.login.flow();

	if (response.status) {
		response = await api.twofa.flow();
	}

	if (response.status) {
		response = await api.mode.flow();
	}

	await bot.stop();
})();
```
5. If it works add a star 🌟 at this project ❤️
6. If you want to help me: **donate on [paypal](http://paypal.ptkdev.io)/[ko-fi](http://coffee.ptkdev.io)** or become a **[backer on patreon](http://patreon.ptkdev.io)**.

## 🐳 Docker setup
If you prefer to run this using Docker, an official container is available from the [Docker Hub](https://hub.docker.com/u/socialmanagertools).

In order to run it, copy the `config.js.tpl` file (template of available in `configs` folder), configure it as you prefer, then use it through volume mapping,
like in this example:

```sh
docker run --restart=always --name=socialmanagertools-twbot -d -v /path/to/configs/config.js:/app/configs/config.js socialmanagertools/twbot:amd64
```

**AVAILABLE TAGS:** `amd64` (64bit), `i386` (32bit),`armv7` (Raspberry PI 2 and Raspberry PI 3), `armv8` (Raspberry PI ARMv8). All point to the master github repository (stable version) but is available `-nightly` suffix, example: `armv7-nightly`.

**WARNING:** with docker is mandatory edit `config.js` and set `chrome_headless` on `enabled` (or to true if you use `v0.9.X` version) and set `chrome_executable_path` to `/usr/bin/chromium-browser`. Without this manual fix docker don't work.

## 📚 Documentation
1. Run `npm run docs-init`
2. Run `npm run docs`

If you want are available online [here](http://docs.socialmanager.tools/README.md).

## 👑 Sponsors
Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](https://www.patreon.com/join/ptkdev) or become top3 sponsor on [ko-fi](https://ko-fi.com/ptkdev). Your logo will show up here with a link to your website.

[![](https://api.ptkdev.io/backers/sponsor1.png)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png)](https://api.ptkdev.io/backers/sponsor15.html)

## 🦄 Backers
Thank you to all our backers! 🙏 Become a backer on [patreon](https://www.patreon.com/join/ptkdev).

[![](https://api.ptkdev.io/backers/backer1.png)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png)](https://api.ptkdev.io/backers/backer15.html)

## ❤️ Contributing
I 💟 contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is horrible, sorry), new modes, best css selectors, fix and new feature! Read [Developers Guidelines](http://docs.socialmanager.tools/developers/guidesline/README.md) for best practices. Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4" width="100px;" alt="Patryk Rzucidło"/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/socialmanagertools-twbot/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/socialmanagertools-twbot/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/socialmanagertools-twbot/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td><td align="center"><a href="https://twitter.com/maxfer75"><img src="https://raw.githubusercontent.com/social-manager-tools/socialmanagertools-twbot/nightly/.github/assets/avatar/maxfer75.jpg" width="100px;" alt="MaXfer "/><br /><sub><b>MaXfer </b></sub></a><br /><a href="#design-maxfer75" title="Design">🎨</a></td><td align="center"><a href="https://twitter.com/tanik72"><img src="https://raw.githubusercontent.com/social-manager-tools/socialmanagertools-twbot/nightly/.github/assets/avatar/tanik72.jpg" width="100px;" alt="Tanik"/><br /><sub><b>Tanik</b></sub></a><br /><a href="#design-TaniK72" title="Design">🎨</a></td><td align="center"><a href="https://github.com/agoalofalife"><img src="https://avatars1.githubusercontent.com/u/15719824?v=4" width="100px;" alt="Ilua Chubarov"/><br /><sub><b>Ilua Chubarov</b></sub></a><br /><a href="https://github.com/ptkdev/socialmanagertools-twbot/commits?author=agoalofalife" title="Code">💻</a></td><td align="center"><a href="https://julianxhokaxhiu.com"><img src="https://avatars1.githubusercontent.com/u/1237070?v=4" width="100px;" alt="Julian Xhokaxhiu"/><br /><sub><b>Julian Xhokaxhiu</b></sub></a><br /><a href="https://github.com/ptkdev/socialmanagertools-twbot/commits?author=julianxhokaxhiu" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 📲 Tools
[![](https://img.shields.io/badge/portfolio-ptkdev-000000.svg)](https://ptk.dev/)
[![](https://img.shields.io/badge/app-meingifs-E1215B.svg)](https://meingifs.pics/)
[![](https://img.shields.io/badge/stickers-ptkdev-128C7E.svg)](https://stickers.ptkdev.io/)

[![](https://img.shields.io/badge/app-social%20manager%20tools-ff7f19.svg)](http://socialmanager.tools/)
[![](https://img.shields.io/badge/api-instagram%20bot-895a4d.svg)](https://github.com/social-manager-tools/socialmanagertools-igbot)
[![](https://img.shields.io/badge/api-twitter%20bot-21B7F4.svg)](https://github.com/social-manager-tools/socialmanagertools-twbot)
[![](https://img.shields.io/badge/api-facebook%20bot-3b5998.svg)](https://github.com/social-manager-tools/socialmanagertools-fbbot)
[![](https://img.shields.io/badge/telegram%20bot-feed%20rss%20for%20wordpress%20&amp;%20medium-00AB6C.svg)](https://github.com/social-manager-tools/socialmanagertools-tgbot)


## 🐍 Sorry for snake_case
I love snake_case syntax sorry for this 😭 don't hate me.

## 💫 License
* Code and Contributions have **MIT License**
* Images and logos have **CC BY-NC 4.0 License**
* Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2018-2019 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>