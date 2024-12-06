/**
 * MODE: likemode_realistic
 * =====================
 * Goto random hashtag from config list, like fast 12 tweet and sleep X min in night.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
const Log = require("./../logger/log");
const Translate = require("./../commons/translate");
const Api = require("./../routes/api");
const Utils = require("./../commons/utils");
const Status = require("./../logger/state").Status;
const STATE = require("./../logger/state").STATE;
const STATE_EVENTS = require("./../logger/state").STATE_EVENTS;
const core = require("./../core/core");
const ansi = require("strip-ansi");

class Likemode_realistic extends Status {
	constructor() {
		super();
		this.core = core;
		this.LOG_NAME = "likemode_realistic";
		this.log = new Log(this.LOG_NAME);
		this.lang = new Translate();
		this.utils = new Utils();

		this.local = {};
		this.local.cache_hashtags = [];
		this.local.current_hashtag = [];
		this.local.cache_tweets_urls = [];
		this.local.current_tweet_url = "";
		this.local.like_counter = 12;

		this.api = {};
		this.api.click = new Api.Click();
		this.api.check = new Api.Check();
		this.api.goto = new Api.Goto();
		this.api.read = new Api.Read();
		this.api.write = new Api.Write();
		this.api.page = new Api.Page();
		this.api.stories = new Api.Stories();
		this.api.database = new Api.Database();
		this.api.analytics = new Api.Analytics();
	}

	/**
	 * Likemode Realistic Flow
	 * =====================
	 * Run this flow
	 *
	 */
	async flow() {
		let tag = "likemode_realistic::flow()";
		this.log.info(tag, `${this.lang.translate("loading")}`);

		let alive = {"status": true};

		await this.api.database.init(this.LOG_NAME);

		let bot_seconds_wait_min = this.utils.compute_interval_between_run_in_seconds(this.core.config.bot_mode_options[this.core.config.bot_mode].likeday_min, 12);
		let bot_seconds_wait_max = this.utils.compute_interval_between_run_in_seconds(this.core.config.bot_mode_options[this.core.config.bot_mode].likeday_max, 12);

		do {
			let today = new Date();
			this.log.info(tag, `${this.lang.translate("current_time_night")}: ${parseInt(`${today.getHours()}${today.getMinutes() < 10 ? "0" : ""}${today.getMinutes()}`)}`);

			let is_sleep_night_flag_enabled = this.core.config.bot_mode_options[this.core.config.bot_mode].sleep_night === "enabled";
			let is_day = (parseInt(`${today.getHours()}${today.getMinutes() < 10 ? "0" : ""}${today.getMinutes()}`) >= (this.core.config.bot_mode_options[this.core.config.bot_mode].sleep_end).replace(":", ""));

			if (!is_sleep_night_flag_enabled || is_day) {
				this.log.info(tag, `${this.lang.translate("cache_size")}: ${this.local.cache_hashtags.length}`);

				if (this.local.cache_hashtags.length <= 0) {
					this.local.cache_hashtags = this.core.config.bot_mode_options[this.core.config.bot_mode].hashtags.slice();
				}

				if (this.local.like_counter < 1 || this.local.cache_tweets_urls <= 0) {
					this.local.cache_hashtags = this.utils.mix_array(this.local.cache_hashtags);
					this.local.current_hashtag = this.local.cache_hashtags.pop();

					await this.api.goto.hashtag(this.local.current_hashtag);

					await this.utils.sleep(this.utils.random_interval(1, 3));

					let response_read_tweet_list = await this.api.read.tweet_list("hashtag");
					this.local.cache_tweets_urls = response_read_tweet_list.tweets_urls;
				}

				this.log.debug(tag, `${this.lang.translate("hashtag_id")}: #${this.local.current_hashtag}`);

				this.local.current_tweet_url = this.local.cache_tweets_urls.pop();
				await this.api.goto.url(this.local.current_tweet_url);

				await this.utils.sleep(this.utils.random_interval(1, 3));

				let response_heart = await this.api.click.heart();

				if (response_heart.status) {
					this.local.like_counter--;
					this.log.debug(tag, `local.like_counter: ${this.local.like_counter}`);
				}

				await this.utils.sleep(this.utils.random_interval(1, 3));

				let response_read_user_username = await this.api.read.user_username("picture", "@");

				let json = {
					"account": this.core.config.account.username,
					"tweet_id": this.local.current_tweet_id,
					"username": response_read_user_username.username,
					"hashtag": `#${this.local.current_hashtag}`,
					"status_error": ansi(response_heart.error),
					"status_warning": ansi(response_heart.warning)
				};
				await this.api.database.insert(json);

				if (this.local.like_counter < 1) {
					this.local.like_counter = 12;
					this.log.info(tag, this.lang.translate("finish_fast_like", {"time": `${this.utils.decimal_to_minutes(bot_seconds_wait_max / 60)}-${this.utils.decimal_to_minutes(bot_seconds_wait_min / 60)}`}));
					await this.utils.sleep(this.utils.random_interval(bot_seconds_wait_max, bot_seconds_wait_min));
				}
			} else {
				this.log.info(tag, this.lang.translate("is_night_bot_sleep"));
				await this.utils.sleep(this.utils.random_interval(60 * 4, 60 * 5));

				alive = await this.utils.keep_alive();
				if (alive == false) {
					break;
				}
			}

			alive = await this.api.page.keep_alive();

			this.emit(STATE_EVENTS.CHANGE_STATUS, STATE.OK);
		} while (alive.status);

		this.emit(STATE_EVENTS.CHANGE_STATUS, STATE.ERROR);

		return false;
	}

}

module.exports = Likemode_realistic;