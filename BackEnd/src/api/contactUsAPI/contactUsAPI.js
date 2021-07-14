const express = require('express');
const router = express.Router();
const controller = require('../../controller/contactUsCrl/contactUsController');

module.exports = function () {
    //POST ContactUs Details
    router.post('/create', controller.createContactUs);
    //GET all ContactUs Details
    router.get('/', controller.viewAllContactUs);
    return router;
}