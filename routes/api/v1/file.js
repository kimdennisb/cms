'use strict';

let express = require('express')
let router = express.Router()
let file = require('../../../controllers/api/v1/file')

//
router.use(function(req, res, next) {
    /*res.set({
        'Access-Control-Allow-Origin': '*'
    });*/
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-With,content-type,Authorization')
    next();
});

router.route('/:id')
    .get(file.show)
    .put(file.update)
    .delete(file.destroy);

router.route('/:id/update')
    .post(file.update)

router.route('/:id/destroy')
    .post(file.destroy)

router.route('/')
    .get(file.all)
    .post(file.create)

module.exports = function(app) {
    app.use('/api/v1/file', router);
};
