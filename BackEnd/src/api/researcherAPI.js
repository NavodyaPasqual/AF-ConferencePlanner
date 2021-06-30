const express = require('express');
const router = express.Router();
const controller = require('../controller/researcherController');

module.exports = function () {
    router.post('/create', controller.createResearchPaper);
    router.get('/', controller.viewResearchPapers);
    router.get('/:id', controller.viewResearchPapersById);
    router.delete('/delete/:id', controller.deleteResearchPapersById);
    return router;
}