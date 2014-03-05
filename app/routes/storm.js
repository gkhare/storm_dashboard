'use strict';

module.exports = function(app) {
    
    // Home route
    var storm = require('../controllers/storm');
    app.get('/storm', storm.render);
    
    app.get('/storm/thrift', storm.getStormClusterData);

};