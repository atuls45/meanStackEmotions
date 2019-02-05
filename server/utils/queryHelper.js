/**
 * This class is used to help the query building
 * @class
 */
class QueryHelper {
    /**
     * Represents an abstract class which provides general methods to simplify query building
     * @constructor
     */
    constructor(collectionModel) {
        this.query = collectionModel;
    }

    /**
     * Returns the Query Object.
     * Returns multipleQueries is defined. `bulkInsert` initializes the multipleQueries.
     *
     * @returns {Object} Query Object of Squel
     */
    buildQuery() {
        return this.query;
    }


    /**
     * Select Query Builder
     *
     * @param {string} alias Alias
     * @returns {Object<module:utils/query-helper~QueryHelper>}
     */
    find(fields, condition = {}) {
        this.query.find(condition, fields);
        return this;
    }

    /**
     * To display specific fields
     *
     * @param {Array} fields
     * @param {string} condition
     * @returns {Object<module:utils/query-helper~QueryHelper>}
     */
    projection(fields, condition) {
        let fieldList = {};
        fields.forEach(((field) => {
            fieldList[field] = 1;
        }));
        return this.find(fieldList, condition);
    }

    /**
     * To limit records
     *
     * @param {number} number
     * @returns {Object<module:utils/query-helper~QueryHelper>}
     */
    limit(number) {
        this.query.limit(number);
        return this;
    }

    /**
     * To skip records
     *
     * @param {number} number.
     * @returns {Object<module:utils/queryHelper~QueryHelper>}
     */
    skip(number) {
        this.query.skip(number);
        return this;
    }

    /**
     * To convert the query in string.
     * @returns {string} query string.
     */
    toString() {
        return this.query.toString();
    }
}

/**
 * Defines a query helper utility.
 * @module utils.queryHelper
 */
module.exports = QueryHelper;
