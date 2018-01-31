/**
 * MODE: Retweet Mode List
 * =====================
 * Bot select random tweet from config url-tweet-list and retweet 1 random tweet
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
class Rtmode_list {
    constructor(bot, config, utils) {
        this.bot = bot;
        this.config = config;
        this.utils = utils;
    }
}

module.exports = (bot, config, utils) => { return new Rtmode_list(bot, config, utils); };