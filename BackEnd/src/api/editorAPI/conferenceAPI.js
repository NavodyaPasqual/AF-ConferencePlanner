const express = require("express");
const router = express.Router();

const { create, conferencelist, read, conferenceById, remove, update, photo, approvedconference } = require('../../controller/editorCtrl/conferenceController');

// API calls for conferences
router.post("/create", create);
router.get("/approved/conferences", approvedconference);
router.get("/conferences", conferencelist);
router.get("/:conferenceId", read);
router.delete("/delete/:conferenceId", remove);
router.put("/update/:conferenceId", update);
router.get("/photo/:conferenceId", photo);

router.param("conferenceId", conferenceById);

module.exports = router;
