module.exports = {
    // TwitterBot.js Configs
    "debug": true,

    // BOT Configs
    // [✘] Like Mode Classic: bot select random hashtag from config list and like 1 random tweet
    // [✘] Retweet Mode Classic: bot select random hashtag from config list and retweet 1 random tweet
    // [✘] Retweet Mode List: bot select random tweet from config url-tweet-list and retweet 1 random tweet
    // [✘] Follow-Defollow Mode: follow-defollow following users (ignore users in whitelist) 
    "bot_mode" : "likemode_classic",
    "bot_likeday_min": 900,
    "bot_likeday_max": 1000,

    // Twitter Account
    "twitter_username": "ptkdev", //without @
    "twitter_password": "password",
    "twitter_hashtag": ['muraleshunter','followfriday','goodmorning'], //without #
    "twitter_pin": "sms", //only sms at moment
    "twitter_userwhitelist": [''], //without @
    "twitter_timelineurls": ['https://twitter.com/ptkdev/timelines/683667053480382464'],

    // Puppeteer configs
    "chrome_headless" : false,
    "chrome_options": ['--disable-gpu', '--no-sandbox', '--window-size=1920x1080'],
};
