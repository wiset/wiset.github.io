/**
 * API: Read
 * =====================
 * Read username, get url of tweet, get description, etc...
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
const Log = require("./../logger/log");
const Translate = require("./../commons/translate");
const Utils = require("./../commons/utils");
const core = require("./../core/core");
const fse = require("fs-extra");

class Read {
	constructor(LOG_NAME = "api") {
		this.core = core;
		this.LOG_NAME = LOG_NAME;

		this.log = new Log(this.LOG_NAME);
		this.lang = new Translate();
		this.utils = new Utils();
	}

	/**
	 *
     * Username
     * =====================
     * Read username from picture or profile page
     *
     * @todo: auto mode for <where> param: detect correct page automatically
     *
     * @param {string}  where  - get username from profile page or single picture page, available values: profile, picture (optional: default profile)
     * @param {string}  prefix - prefix before username, example: pass @ string if you need username with @ on return (optional: default empty)
     *
     * @return {Object}  response          - {}
     *         {boolean} response.status   - true: successful / false: fail
     *         {string}  response.error    - if status is false return error details
     *         {string}  response.username - string of user username to see profile
     *
     * @since: v0.10
     *
     */
	async user_username(where = "profile", prefix = "") {
		let tag = "read::user_username()";
		this.log.info(tag, `${this.lang.translate("try_get_user_username")}`);

		let response = {
			"status": false,
			"username": ""
		};

		let selector = {
			"profile": "header section div:nth-child(1) h1",
			"picture": "article div:nth-child(2) h2 a:nth-child(1)",
			"current": "",
		};

		switch (where) {
		  case "picture":
		    selector.current = selector.picture;
		    break;
		  case "profile":
		    selector.current = selector.profile;
		    break;
		  default:
		    selector.current = selector.profile;
		}

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector.current = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector.current, {timeout: 10000});
			response.username = await this.core.bot.evaluate(el => el.innerHTML, await this.core.bot.$(selector.current));

			this.log.info(tag, `${response.username}`);
			response.status = true;
		} catch (err) {
			response.username = "";
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
			response.selector = selector;
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		if (prefix !== "") {
			response.username = prefix + response.username;
		}

		return response;
	}

	/**
	 *
	 *
     * Description
     * =====================
     * Read description from profile page
     *
     * @return {Object}  response             - {}
     *         {boolean} response.status      - true: successful / false: fail
     *         {string}  response.error       - if status is false return error details
     *         {string}  response.description - string of user description to see profile
     *
     * @since: v0.10
     *
     */
	async user_description() {
		let tag = "read::user_description()";
		this.log.info(tag, `${this.lang.translate("try_get_user_description")}`);

		let response = {"status": false, username: ""};
		let selector = "header div:nth-child(1) span";

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector, {timeout: 10000});
			response.description = await this.core.bot.evaluate(el => el.innerHTML, await this.core.bot.$(selector));

			this.log.info(tag, `${response.description}`);
			response.status = true;
		} catch (err) {
			response.description = "";
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
	 *
	 *
     * Name / Surname
     * =====================
     * Read nickname/name/surname on top of description from profile page
     *
     * @return {Object}  response          - {}
     *         {boolean} response.status      - true: successful / false: fail
     *         {string}  response.nickname - string of nickname, empty if get error
     *         {string}  response.error    - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async user_name() {
		let tag = "read::user_name()";
		this.log.info(tag, `${this.lang.translate("try_get_user_name")}`);

		let response = {"status": false, name: ""};
		let selector = "header div:nth-child(1) h1";

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector, {timeout: 10000});
			response.name = await this.core.bot.evaluate(el => el.innerHTML, await this.core.bot.$(selector));

			this.log.info(tag, `${response.name}`);
			response.status = true;
		} catch (err) {
			response.name = "";
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Website link
     * =====================
     * Read url from profile page
     *
     * @return {Object}  response         - {}
     *         {boolean} response.status  - true: successful / false: fail
     *         {string}  response.website - string of url, empty if get error
     *         {string}  response.error   - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async user_website() {
		let tag = "read::user_website()";
		this.log.info(tag, `${this.lang.translate("try_get_user_website")}`);

		let response = {"status": false, website: ""};
		let selector = "header div:nth-child(1) a";

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector, {timeout: 10000});
			response.website = await this.core.bot.evaluate(el => el.innerHTML, await this.core.bot.$(selector));

			this.log.info(tag, `${response.website}`);
		} catch (err) {
			response.website = "";
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Tweet ID from URL
     * =====================
     * Get id and username from tweet url
     *
     * @param {string}  tweet_url  - id and username from tweet url (mandatory)
     *
     * @return {Object}  response                - {}
     *         {boolean} response.status         - true: successful / false: fail
     *         {string}  response.tweet_id       - string of id, empty if get error
     *         {string}  response.tweet_username - string of username, empty if get error
     *         {string}  response.error          - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async tweet_id(tweet_url) {
		let tag = "read::tweet_id()";
		this.log.info(tag, `${this.lang.translate("try_get_tweet_id")}`);

		let response = {"status": false, tweet_id: ""};

		try {
			response.tweet_id = tweet_url.split("/")[5];
			response.tweet_username = tweet_url.split("/")[3];

			this.log.info(tag, `${response.tweet_id}`);
		} catch (err) {
			response.tweet_id = "";
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Tweets
     * =====================
     * Read array of tweets url
     *
     * @todo: auto mode for <where> param: detect correct page automatically
     *
     * @param {string}  where  - get urls of user tweets from profile page or hashtag page, available values: profile, hashtag, location (optional: default profile)
     *
     * @return {Object}  response                  - {}
     *         {boolean} response.status           - true: successful / false: fail
     *         {Array}   response.tweets_ids       - tweet ids, empty array if get error
     *         {Array}   response.tweets_urls      - tweet urls, empty array if get error
     *         {Array}   response.tweets_usernames - tweet hash ids, empty array if get error
     *         {string}  response.error            - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async tweet_list(where = "profile") {
		let tag ="read::tweet_list()";
		this.log.info(tag, `${this.lang.translate("try_get_tweet_array")}`);

		let response = {"status": false, tweets_urls: [], tweets_ids: [], tweets_usernames: []};
		let selector = "";
		let selector_profile = ".stream li.stream-item a.js-permalink";
		let selector_hashtag = ".stream li.stream-item a.js-permalink";
		let selector_location = ".stream li.stream-item a.js-permalink";

		switch (where) {
		  case "hashtag":
		    selector = selector_hashtag;
		    break;
		  case "profile":
		    selector = selector_profile;
		    break;
	      case "location":
		    selector = selector_location;
		    break;
		  default:
		    return [];
		}

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector, {timeout: 15000});
			response.tweets_urls = await this.core.bot.$$eval(selector, hrefs => hrefs.map((a) => {
				return a.href;
			}));

			for (let i = 0; i < response.tweets_urls.length; ++i) {
			    response.tweets_ids.push(response.tweets_urls[i].split("/")[5]);
			    response.tweets_usernames.push(response.tweets_urls[i].split("/")[3]);
			}

			this.log.debug(tag, `${this.lang.translate("tweet_urls")}: ${response.tweets_urls}`);
			response.status = true;
		} catch (err) {
			response.tweets_ids = [];
			response.tweets_urls = [];
			response.tweets_usernames = [];
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Read pin from loginpin.txt
     * =====================
     * Get sms pin from txt file
     *
     * @return {Object}  response        - {}
     *         {boolean} response.status - true: successful / false: fail
     *         {string}  response.error  - return error detail if status is false
     *         {string}  response.pin    - return pin (6 numbers) from loginpin.txt
     *
     * @since: v0.10
     *
     */
	async twofa_pin() {
		let tag = "read::twofa_pin()";
		this.log.info(tag, `${this.lang.translate("try_get_twofa_pin")}`);

		let response = {"status": false};

		try {
			do {
		        let data = fse.readFileSync(this.core.config.log.path.pin, "utf8");
		        response.pin = data.toString().trim();
		        response.pin = response.pin.replace(/ /g, "");

		        await this.utils.sleep(this.utils.random_interval(2, 4));
		    } while (response.pin === "123456" || response.pin === "" || response.pin.length < 6);

		    this.log.debug(tag, `PIN: ${response.pin}`);
			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Is Following?
     * =====================
     * Check if you follow this user
     *
     * @todo: add more where position or auto mode for <where> param: detect correct page automatically
     *
     * @param {string}  where  - check status of follow from profile page, available values: profile (optional: default profile)
     *
     * @return {boolean} status         - true is <3 / false is </3
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async is_following(/* where = "profile" */) {
		let tag = "read::is_following()";
		this.log.info(tag, `${this.lang.translate("try_check_is_following")}`);

		let dialog = null;
		let selector = "main header section div:nth-child(1) span span button";
		let response = {"status": false};

		if (typeof this.core.config.selectors[this.utils.clean_tag(tag)] !== "undefined") {
			selector = this.core.config.selectors[this.utils.clean_tag(tag)];
		}

		try {
			await this.core.bot.waitForSelector(selector, {timeout: 10000});

			let text = await this.core.bot.evaluate(el => el.innerHTML, await this.core.bot.$(selector));
			if (text.trim().includes(" ")) {
				response.result = true;
			} else {
				response.result = false;
			}
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (typeof dialog === "undefined" || dialog === null || dialog === "") {
			response.status = true;
			delete response.error;
		} else {
			response.status = false;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("follow_ok")}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${this.lang.translate("follow_ko")}`);
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}
}

module.exports = Read;