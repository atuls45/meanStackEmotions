//internal dependencies
const ApiService = require('../../base/apiService');
const ApplicationError = require('../../base/applicationError');
const FilterEmotionsRepository = require('./filterEmotionsRepository');

/**
 * Provides a service for `FilterEmotions`.
 * @extends base.ApiService
 * @memberof features.filterEmotions
 */
class FilterEmotionsService extends ApiService {

    /**
     * Initializes a new instance of {FilterEmotionsService} class.
     * @param {ApiContext} context.
     */
    constructor(context) {
        super(context);

        this.user = context.user;
        /**
         * Object of the DbDriver class.
         * @type {base.db.DbDriver}
         */
        this.connection = context.connection;
        /**
         * Object of the FilterEmotionsRepository class.
         * @type {FilterEmotionsRepository}
         */
        this.repository = new FilterEmotionsRepository(context);
    }

    /**
     * Lists the Forms.
     * @param {Expression} expr Authorization Expression
     * @returns {object[]} returns array of forms.
     */
    async filterList(query) {
        //Any Business logic here.
        return await this.repository.filterList(query);
    }
}

module.exports = FilterEmotionsService;
