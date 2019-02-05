/**
 * @namespace features.filterEmotions
 */
const filterEmotionsApi = require('./filterEmotionsApi');

module.exports = function initializeRoutes(app) {
    filterEmotionsApi.register(app);
};
