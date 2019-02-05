// thrird party modules
const Joi = require('joi');

// internal dependencies
const ApiSchema = require('../../base/apiSchema');
const FilterEmotionsController = require('./filterEmotionsController');

/**
 * @kind joivar
 */
const filterRequest = {
    Age: Joi.string().optional(),
    skip: Joi.number().optional(),
};

/**
 * Filter the emotions list.
 * @kind endpoint
 * @memberof features.filterEmotions
 */
const filterList = {
    path: '',   // replace it with ':/id' if param need to be passes
    verb: 'GET',    //Replace post put in same way
    handler: {
        controller: FilterEmotionsController,
        method: 'filterList',
        arguments: ['request:query'] // Pass ['id', 'name' , 'request:body', ':age', ':name'] if want id,
                                    // name only from params and whole body from request and only age, name from queryParams
    },
    // middleware: {
    //     authorizeArea: ['Developer']  //Not required here, just for reference.
    // },
    request:{
        // params: {
        //     id: Joi.number().optional()  Uncomment and try passing non integer param
        // },
        query: Joi.object().keys(filterRequest)
    },
    response: Joi.array().items(Joi.object().keys({
        _id: Joi.string().required(),
        Emotion: Joi.array().required(),
        Age: Joi.number().required(),
        Store: Joi.string().allow('', null).optional(),
    }))
};

/**
 * Defines the filterEmotions api.
 * @kind schema
 * @type {ApiSchema}
 * @memberof features.filterEmotions
 */
const FilterEmotions = {
    name: 'FilterEmotions',
    url: '/api/filterEmotions',
    endpoints: [
        filterList
    ]
};

module.exports = new ApiSchema(FilterEmotions);
