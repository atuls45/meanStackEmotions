var mongoose = require('mongoose');

module.exports = (collectionName) => {
    return mongoose.model(collectionName, _createSchema(collectionName));
};

function _createSchema(collectionName) {
    return new mongoose.Schema({}, {
        collection: collectionName
    });
}
