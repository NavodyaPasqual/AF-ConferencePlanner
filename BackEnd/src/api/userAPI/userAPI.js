const express = require('express');
const router = express.Router();
const controller = require('../../controller/userCtrl/UserControll');

module.exports = function () {
    //POST user Details
    router.post('/signUp', controller.signup);
    //GET user Details
    router.post('/signIn', controller.signin);
    //DELETE user Details
    router.delete('/delete/:id', controller.deleteUser);
    //DELETE user Details
    router.get('/users', controller.getAllUsers);
    return router;
}