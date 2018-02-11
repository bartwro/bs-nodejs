'use strict'

module.exports = function(app){
    var notifier = require('../controllers/notifierController')

    app
        .route('/api/ping')
        .get(notifier.ping);

}