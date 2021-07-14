const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Speaker = require("../../models/editorModel/speakerModel");

// get speaker by ID
exports.speakerById = (req, res, next, id) => {
    Speaker.findById(id).exec((err,speaker) => {
        if (err || !speaker) {
            return res.status(400).json({
                error: "Speaker not found"
            });
        }
        req.speaker = speaker;
        next();
    });
};

// get the speaker details except photo
exports.readdetails = (req, res) => {
    req.speaker.photo = undefined;
    return res.json(req.speaker);
};

// create new speaker
exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let speaker = new Speaker(fields)

        const {name,description, status} = fields

        // validate fields
        if(!name || !description ||!speaker ) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        // validate photo size
        if(files.photo) {
            if(files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 10mb in size"
                });
            }
            speaker.photo.data = fs.readFileSync(files.photo.path)
            speaker.photo.contentType = files.photo.type
        }

        speaker.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: 'Error Found'
                });
            }
            res.json(result);
        });
    });
};

// delete speaker
exports.remove = (req, res) => {
    let speaker = req.speaker
    speaker.remove((err, deletedSpeaker) => {
        if(err) {
            return res.status(400).json({
                error: "Error On Delete"
            });
        }
        res.json({
            deletedSpeaker,
            message: "Speaker Deleted successfully"
        });
    });
};

// update conference details
exports.update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }

        const {name,description} = fields

        let speaker = req.speaker;
        speaker = _.extend(speaker,fields)


        if(files.photo) {
            if(files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 10mb in size"
                });
            }
            speaker.photo.data = fs.readFileSync(files.photo.path)
            speaker.photo.contentType = files.photo.type
        }

        speaker.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: "Update Failed"
                });
            }
            res.json(result);
        });
    });
};

// get approved conference to show
exports.approvedspeaker = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
    let check = { status: "Approved"}

    Speaker.find(check)
        .select("-photo")
        .sort([[sortBy, order]])
        .exec((err, approvedspeaker) => {
            if(err) {
                return res.status(400).json ({
                    error: 'Speaker not found'
                });
            }
            res.json(approvedspeaker);
        });

};

// get the speaker list added by editor
exports.speakerlist = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'

    Speaker.find()
        .select("-photo")
        .sort([[sortBy, order]])
        .exec((err, speakers) => {
            if(err) {
                return res.status(400).json ({
                    error: 'Speaker not found'
                });
            }
            res.json(speakers);
        });

};

// get the photo of speaker
exports.photo = (req, res, next) => {
    if(req.speaker.photo.data) {
        res.set('Content-Type', req.speaker.photo.contentType)
        return res.send(req.speaker.photo.data);
    }
    next();
};










