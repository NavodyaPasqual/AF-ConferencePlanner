const express = require('express');
const router = express.Router();
const controller = require('../../controller/attendeeCtrl/workShopPaymentController');

module.exports = function () {
    //POST WorkShopPayment
    router.post('/create', controller.createWorkshopPayment);
    //GET all WorkShopPayment
    router.get('/', controller.getAllWorkshopPayment);
    //GET WorkShopPayment By ID
    router.get('/viewbyid/:id', controller.viewPaymentById);
    //GET ViewWorkShop By WorkShopPaymentID
    router.get('/viewbyid/workshops/:id', controller.viewWorkShopByPaymentId);
    //DELETE WorkShopPayment By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE Payment By ID
    router.put('/update/:id', controller.updateById);
    return router;
}