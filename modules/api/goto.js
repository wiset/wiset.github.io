/**
 * API: Goto
 * =====================
 * Go to profile page, go to tweet, go to url... etc...
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

class Goto {
	constructor(LOG_NAME = "api") {
		this.core = core;
		this.LOG_NAME = LOG_NAME;

		this.log = new Log(this.LOG_NAME);
		this.lang = new Translate();
		this.utils = new Utils();
	}

	/**
     * Tweet
     * =====================
     * Goto tweet page
     *
     * @param {string} id - string of id hash of tweet (mandatory)
     * @param {string} username - string of id hash of tweet (mandatory)
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async tweet(id, username) {
		let tag = "goto::tweet()";
		this.log.info(tag, `${this.lang.translate("try_goto_tweet_page")}`);

		let response = {"status": false};

		try {
			await this.core.bot.goto(`https://twitter.com/${username}/status/${id}`);

			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("tweet_id")}: ${id}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Url
     * =====================
     * Goto page
     *
     * @param {string} url - string of url of tweet (mandatory)
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async url(url) {
		let tag = "goto::url()";
		this.log.info(tag, `${this.lang.translate("try_goto_url_page")}`);

		let response = {"status": false};

		try {
			await this.core.bot.goto(url);

			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `${this.lang.translate("url_id")}: ${url}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Hashtag
     * =====================
     * Goto hashtag page
     *
     * @param {string}  hashtag - string of hashtag, work with # or without # prefix (mandatory)
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async hashtag(hashtag) {
		let tag = "goto::hashtag()";
		this.log.info(tag, `${this.lang.translate("try_goto_hashtag_page")}`);

		let response = {"status": false};

		try {
			hashtag = hashtag.replace(/#/g, "");

			await this.core.bot.goto(`https://twitter.com/hashtag/${hashtag}`);

			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `#${hashtag}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Location
     * =====================
     * Goto gps location page
     *
     * @param {int}  gps - location twitter id (mandatory)
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async location(gps) {
		let tag = "goto::location()";
		this.log.info(tag, `${this.lang.translate("try_goto_gps_page")}`);

		let response = {"status": false};

		try {
			await this.core.bot.goto(`https://twitter.com/search?l=&src=typd&q=near%3A"${gps}"%20within%3A15mi`);

			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `GPS ID: ${gps}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Profile
     * =====================
     * Goto profile of user
     *
     * @param {string}  profile - string of nickname, work with @ or without @ prefix (mandatory)
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async profile(nickname) {
		let tag = "goto::profile()";
		this.log.info(tag, `${this.lang.translate("try_goto_profile_page")}`);

		let response = {"status": false};

		nickname = nickname.replace(/@/g, "");

		try {
			await this.core.bot.goto(`https://twitter.com/${nickname}`);

			response.status = true;
		} catch (err) {
			response.status = false;
			response.error = err;
		}

		if (response.status) {
			this.log.info(tag, `@${nickname}`);
			this.log.info(tag, `${this.lang.translate("done")}`);
		} else {
			this.log.error(tag, `${response.error}`);
			this.log.docs("api", tag);
			this.log.stackoverflow(tag, "puppeteer", response.error);
		}

		return response;
	}

	/**
     * Login
     * =====================
     * Goto login page
     *
     * @return {boolean} status         - true: successful / false: fail
     *         {string}  response.error - if status is false return error details
     *
     * @since: v0.10
     *
     */
	async login() {
		let tag = "goto::login()";
		this.log.info(tag, `${this.lang.translate("try_goto_login_page")}`);

		let response = {"status": false};

		try {
			await this.core.bot.goto("https://twitter.com/login");

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
}

module.exports = Goto;