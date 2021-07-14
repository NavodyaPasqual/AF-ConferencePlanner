const express = require('express');
const router = express.Router();
const controller = require('../../controller/attendeeCtrl/attendeeController');

module.exports = function () {
    //POST AttendeeWorkshopRegistration
    router.post('/create', controller.createAttendee);
    //GET all AttendeeWorkshopRegistration
    router.get('/', controller.getAllAttendee);
    //GET AttendeeWorkshopRegistration By ID
    router.get('/viewbyid/:id', controller.viewAttendeeById);
    //GET WorkShop By AttendeeID
    router.get('/viewbyid/workshop/:id', controller.viewWorkShopByAttendeeId);
    //UPDATE Attendee registration for workshop By ID
    router.put('/update/:id', controller.updateById);
    //DELETE AttendeeWorkshopRegistration By ID
    router.delete('/delete/:id', controller.deleteById);
    return router;
}