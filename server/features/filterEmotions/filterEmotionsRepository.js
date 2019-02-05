// internal dependencies
const BaseRepository = require('../../base/baseRepository');
const collection = require('../../utils/collection');
const QueryHelper = require('../../utils/queryHelper');


/**
 * Provides a repository for `FilterEmotions`.
 * @extends base.BaseRepository
 * @memberof features.filterEmotions
 */
class FilterEmotionsRepository extends BaseRepository {

    /**
     * Initializes a new instance of {EntitiesRepository} class
     * @param {ApiContext} context
     */
    constructor(context) {
        super(context);
        /**
         * Object of the mongoose model.
         * @type {utils.collection}
         */
        this.collectionModel = collection('meantask');

        this.generatedQuery = new QueryHelper(this.collectionModel);
    }

    /**
     * Lists the forms.
     * @returns {object[]} list of forms.
     */
    async filterList(filters) {
        // Below code is not working for now, will look into it later.
        // this.generatedQuery
        // .find()
        // .limit(2);

        // filters.skip && this.generatedQuery.skip(filters.skip);

        // const query = this.generatedQuery.buildQuery();

        // return await this.runQuery(query);



        // Temperary returning normally
        return await this.collectionModel.find().limit(2).exec();
    }
}

module.exports = FilterEmotionsRepository;
