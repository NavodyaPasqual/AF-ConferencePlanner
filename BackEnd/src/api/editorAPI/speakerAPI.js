const express = require("express");
const router = express.Router();

const { create, speakerlist, readdetails, speakerById, remove, update, photo, approvedspeaker } = require('../../controller/editorCtrl/speakerController');

// API calls for conferences
router.post("/create", create);
router.get("/approved/speakers", approvedspeaker);
router.get("/speakers", speakerlist);
router.get("/:speakerId", readdetails);
router.delete("/delete/:speakerId", remove);
router.put("/update/:speakerId", update);
router.get("/photo/:speakerId", photo);

router.param("speakerId", speakerById);

module.exports = router;
