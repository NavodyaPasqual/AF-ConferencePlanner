const express = require('express');
const router = express.Router();
const controller = require('../../controller/workShopCtrl/workShopController');

module.exports = function () {
    //POST ViewWorkShop
    router.post('/create', controller.createWorkshop);
    //GET all ViewWorkShop
    router.get('/', controller.viewAllWorkshops);
    //GET ViewWorkShop By ID
    router.get('/viewbyid/:id', controller.viewById);
    //DELETE ViewWorkShop By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE ViewWorkShop By ID
    router.put('/update/:id', controller.updateById);
    return router;
}