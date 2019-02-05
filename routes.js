var glob = require('glob');
var path = require('path');

module.exports = (app) => {
    let indexFiles = glob.sync(
        path.join(app.get('root'), 'features') + '/**/*[i|I]ndex.js'
    );
    indexFiles.forEach(function(file) {
        require(file)(app);
    });
};
