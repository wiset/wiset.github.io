<p align="center"><a href="https://twitter-bot.js.ptkdev.io" alt="Screenshot"><img src="https://ptkdev.it/img/bot/twitter-bot.js.png"></a></p>

<p align="center"><h1 align="center">TwitterBot.js</h1></p>

<p align="center"><a href="#" alt="License"><img src="https://img.shields.io/badge/license-GLPv3-brightgreen.svg"></a>
<a href="https://github.com/GoogleChrome/puppeteer" alt="powered by puppeteer"><img src="https://img.shields.io/badge/powered%20by-puppeteer-46aef7.svg"></a>
<a href="https://github.com/ptkdev/twitter-bot.js/releases" alt="Version"><img src="https://img.shields.io/badge/version-IN%20DEVELOPMENT-lightgrey.svg"></a>
<a href="https://slack.ptkdev.io" alt="Slack Chat"><img src="https://img.shields.io/badge/chat%20on-Slack-orange.svg"></a>
<a href="https://paypal.me/ptkdev" alt="Paypale Donate"><img src="https://img.shields.io/badge/donate-PayPal-red.svg"></a></p>

# What does he do
This bot helps you increase the engagement of your Twitter profile through different social algorithms. Increase the likes on your photos and followers.

# Features
* [✓] Easy to use
* [✓] Login
* [✘] 2FA (sms pin enabled)
* [✓] Multi-Session
* [✓] Multi-Platform (Windows 10, Mac OSX, Linux)
* [✓] Errors manager (bad pin, bad password)
* [✓] Screenshot and Verbose logger
* [✘] Like Mode Classic: bot select random hashtag from config list and like 1 random tweet
* [✘] Retweet Mode Classic: bot select random hashtag from config list and retweet 1 random tweet
* [✘] Retweet Mode List: bot select random tweet from config url-tweet-list and retweet 1 random tweet
* [✘] Follow-Defollow Mode: follow-defollow following users (ignore users in whitelist) 

# Fast setup
1. Download [stable version](https://github.com/ptkdev/twitter-bot.js/releases) and extract it.
2. Download [Node.js](https://nodejs.org/it/) >= 7.6 and install it.
3. Run `npm install` in `twitter-bot.js` folder.
4. Copy root file `config.js.tpl` to `config.js`, fill it properly.
5. Start the bot via `node bot.js`
6. If work add star :star: at this project :heart:

For advanced configuration see [INSTALL.md](https://github.com/ptkdev/twitter-bot.js/blob/master/INSTALL.md).

#### 2FA: SMS Pin
If you received sms or email pin edit `loginpin.txt` and insert it on first line. Wait 3 minutes...

#### Tips: Hide browser
Edit `config.js` and switch `chrome_headless` option to `true`.

#### Check if work:
See images in ./logs/screenshot or disable `chrome_headless` flag.

# TODO
Features:
* GUI in electron
* 2FA (sms pin enabled)
* Like Mode Classic: bot select random hashtag from config list and like 1 random tweet
* Retweet Mode Classic: bot select random hashtag from config list and retweet 1 random tweet
* Retweet Mode List: bot select random tweet from config url-tweet-list and retweet 1 random tweet
* Follow-Defollow Mode: follow-defollow following users (ignore users in whitelist) 

Nice to have:
* docker container

# Sorry for snake_case
I love snake_case syntax sorry for this :sob: don't hate me.

<p align="center"><a href="https://github.com/social-manager-tools" alt="Screenshot"><img src="https://ptkdev.it/img/bot/social-manager-tools.png"></a></p>
<p align="center"><h1 align="center">Social Manager Tools</h1></p>

<p align="center">Available:<br />
<a href="https://github.com/social-manager-tools/instagram-bot.js">InstagramBot.js</a> (<a href="https://github.com/social-manager-tools/instagram-bot-gui.js">GUI</a>)</p>

<p align="center">Coming soon:<br />
<a href="https://github.com/social-manager-tools/twitter-bot.js">TwitterBot.js</a><br />
<a href="https://github.com/social-manager-tools/facebookpage-bot.js">FacebookPageBot.js</a><br />
<a href="https://github.com/social-manager-tools/wordpress-telegram-bot.js">TelegramWordpressBot.js</a></p>

<p align="center"><h1 align="center">License</h1></p>

<p align="center">GNU GENERAL PUBLIC LICENSE</p>

<p align="center">Copyright (c) 2018 Patryk Rzucidło (PTKDev)</p>
