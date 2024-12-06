module.exports = {
	// Developer Configs
	"system": {
		"config_version": "1.0.0",   // version of this file, version increase if change values from previously config
		"language": "en",            // available: en = English / it = Italian
		"raspberry": "disabled",     // if you use raspbian this fix automatically common issues
		"ui": "disabled",            // enabled/disabled only if you work at social-manager-tools GUI
		"terminal_colors": "enabled" // enabled/disabled if you want colors in windows power shell/cmd, mac console or linux terminal
	},

	// Twitter Account
	"account": {
		"username": "ptkdev",   // twitter nickname
		"password": "password", // twitter password
		"pin_method": "auto"    // 2FA: method for receive pin (auto: first authenticator if is enabled and after sms)
	},

	// Set Bot Mode, available:
	// likemode_realistic - select random hashtag from config list, like fast 10-12 tweet and sleep 15-20min
	// rtmode_realistic   - select random hashtag from config list, retweet fast 10-12 tweet and sleep 15-20min
	//
	// Modes details: http://docs.socialmanager.tools/twbot/installation/modes
	// Multi account: http://docs.socialmanager.tools/twbot/installation/multiaccount
	"bot_mode": "likemode_realistic", // this is NOT array. 1 mode is allowed

	// Edit options of current bot_mode you use.
	"bot_mode_options": {
		"likemode_realistic": {
			"hashtags": ["rome", "italy", "muraleshunter"], // recommended more than 20
			"likeday_min": "800",      // min like daily.
			"likeday_max": "900",      // max like daily. In 2018 limit twitter is 1000/day
			"sleep_night": "disabled", // if you need stop bot in night
			"sleep_end": "7:00",        // sleep from 00:00 to 7:00 am
			"database": {
				"default": "./databases/likemode_realistic.json" // json databases with modes info for better report
			},
		},
		"rtmode_realistic": {
			"hashtags": ["rome", "italy", "muraleshunter"], // recommended more than 20
			"rtday_min": "800",      // min retweet daily.
			"rtday_max": "900",      // max retweet daily. In 2018 limit twitter is 1000/day
			"sleep_night": "disabled", // if you need stop bot in night
			"sleep_end": "7:00",        // sleep from 00:00 to 7:00 am
			"database": {
				"default": "./databases/rtmode_realistic.json" // json databases with modes info for better report
			},
		}
	},

	// Force overwrite css selectors if not work, example: {"click_heart":"button#heart"}
	// Syntax is apiName_functionName_selectorName, example: write::comment() => {"write_comment_textarea":"article > textarea.comment"}
	"selectors": {},

	// Puppeteer Configs
	"puppeteer": {
		"chrome_headless": "enabled", // hide google chrome window
		"chrome_options": ["--disable-gpu", "--no-sandbox", "--window-size=1024x768"], // google chrome args
		"chrome_useragent": "", // overwrite chrome user agent
		"chrome_executable_path": "" /* If you want run installed chrome browser, not from npm module
									  *  example for Mac OS: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
									  *  example for Linux:  /usr/bin/chromium
									  */
	},

	// Proxy
	"proxy": {
		"server": "",
		"port": "",
	},

	// LOGS
	"log": {
		"path": {
			"pin": "./configs/loginpin.txt",
			"debug_log": "./logs/debug.log",
			"error_log": "./logs/errors.log",
			"screenshots": "./logs/screenshots/",
		},
		"screenshot": "disabled",  // enabled/disabled screenshot in logs/screenshots folder
		"debug": "enabled",        // enabled/disabled all logs with tag debug
		"info": "enabled",         // enabled/disabled all logs with tag info
		"warning": "enabled",      // enabled/disabled all logs with tag warning
		"errors": "enabled",       // enabled/disabled all logs with tag errors
	}
};