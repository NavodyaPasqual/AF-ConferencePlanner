const express = require('express');
const router = express.Router();
const controller = require('../../controller/researcherCtrl/researchPaperPaymentController');

module.exports = function () {
    router.post('/create', controller.createResearchPaperPayment);
    router.get('/', controller.viewResearchPaperPayment);
    router.get('/:id', controller.viewPaymentById);
    router.delete('/delete/:id', controller.deleteById);
    return router;
}