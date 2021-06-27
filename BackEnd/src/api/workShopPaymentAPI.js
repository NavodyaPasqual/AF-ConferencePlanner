const express = require('express');
const router = express.Router();
const controller = require('../controller/workShopPaymentController');

module.exports = function () {
    //POST WorkShopPayment
    router.post('/create', controller.createWorkshopPayment);
    //GET all WorkShopPayment
    router.get('/', controller.getAllWorkshopPayment);
    //GET WorkShopPayment By ID
    router.get('/viewbyid/:id', controller.viewPaymentById);
    //GET WorkShop By WorkShopPaymentID
    router.get('/viewbyid/workshops/:id', controller.viewWorkShopByPaymentId);
    //DELETE WorkShopPayment By ID
    router.delete('/delete/:id', controller.deleteById);
    return router;
}