const express = require('express');
const router = express.Router();
const controller = require('../controller/workShopController');

module.exports = function () {
    //POST WorkShop
    router.post('/create', controller.createWorkshop);
    //GET all WorkShop
    router.get('/', controller.viewAllWorkshops);
    //GET WorkShop By ID
    router.get('/viewbyid/:id', controller.viewById);
    //DELETE WorkShop By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE WorkShop By ID
    router.put('/update/:id', controller.updateById);
    return router;
}