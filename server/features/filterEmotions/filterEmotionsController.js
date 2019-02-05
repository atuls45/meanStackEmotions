//internal dependencies
const ApiController = require('../../base/apiController');
const FilterEmotionsService = require('./filterEmotionsService');

/**
 * Provides a controller for `FilterEmotions`.
 * @extends base.ApiController
 * @memberof features.filterEmotions
 */
class FilterEmotionsController extends ApiController {

    /**
     * Initializes a new instance of {FormController} class.
     * @param {ApiContext} context.
     */
    constructor(context) {
        super(context);

        /**
         * @type {Object}
         */
        this.context = context;

        /**
         * @type {FilterEmotionsService}
         */
        this.filterEmotionsService = new FilterEmotionsService(context);
    }

    /**
     * Lists the forms.
     * @example
     * [
     *   {
     *       "_id": "5c57e4787a0a472497c1155a",
     *       "Emotion": "happy",
     *       "Entry_Time": "2018-09-01T16:55:35.503Z",
     *       "Repeat": [
     *           "n"
     *       ],
     *       "Gender": [
     *            "male"
     *       ],
     *        "Age": 26,
     *        "Exit_Time": "2018-09-01T16:55:35.503Z",
     *       "Display_Dwell": 0,
     *       "Date": "2018-09-01T16:55:35.503Z",
     *       "ID": 0,
     *       "Store": "StoreA"
     *   },
     *   {
     *       "_id": "5c57e4787a0a472497c1155b",
     *       "Emotion": [
     *           "sad"
     *       ],
     *        "Entry_Time": "2018-09-01T18:22:27.324Z",
     *        "Repeat": [
     *            "y"
     *       ],
     *        "Gender": [
     *            "female"
     *        ],
     *       "Age": 27,
     *       "Exit_Time": "2018-09-01T19:19:27.324Z",
     *       "Display_Dwell": 0,
     *       "Date": "2018-09-01T18:22:27.324Z",
     *       "ID": 1,
     *       "Store": "StoreA"
     *   }
     * ]
     */
    async filterList(query) {
        const data = await this.filterEmotionsService.filterList(query);
        this.respondOk(data);
    }
}

module.exports = FilterEmotionsController;
