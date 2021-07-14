const express = require('express');
const router = express.Router()

//import controller
const { create, list, read, update, remove, approvedlist } = require('../../controller/editorCtrl/conferenceTopicsController');

router.post('/create', create);
router.get('/topics', list);
router.get('/approved/topics',approvedlist )
router.get('/post/:slug', read);
router.put('/post/:slug', update);
router.delete('/post/:slug', remove);

// check backend authentication
/*
router.get('/secret', requireSignin, (req, res) => {
    res.json({
        data: req.user.name
    });
});*/

module.exports = router;
