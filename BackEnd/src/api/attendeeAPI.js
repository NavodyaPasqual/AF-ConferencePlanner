const express = require('express');
const router = express.Router();
const controller = require('../controller/attendeeController');

module.exports = function () {
    //POST Attendee
    router.post('/create', controller.createAttendee);
    //GET all Attendee
    router.get('/', controller.getAllAttendee);
    //GET Attendee By ID
    router.get('/viewbyid/:id', controller.viewAttendeeById);
    //GET WorkShop By AttendeeID
    router.get('/viewbyid/workshop/:id', controller.viewWorkShopByAttendeeId);
    //DELETE Attendee By ID
    router.delete('/delete/:id', controller.deleteById);
    return router;
}