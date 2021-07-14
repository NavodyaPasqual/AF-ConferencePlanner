const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Conference = require("../../models/editorModel/conferenceModel")

// get conference by conference ID
exports.conferenceById = (req, res, next, id) => {
    Conference.findById(id).exec((err,conference) => {
        if (err || !conference) {
            return res.status(400).json({
                error: "Conference not found"
            });
        }
        req.conference = conference;
        next();
    });
};

// get the conference details except photo
exports.read = (req, res) => {
    req.conference.photo = undefined;
    return res.json(req.conference);
};

// create new conference
exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let conference = new Conference(fields)

        const {title,description, venue,date,about,status} = fields

        // validate fields
        if(!title || !venue || !date || !about || !status) {
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
            conference.photo.data = fs.readFileSync(files.photo.path)
            conference.photo.contentType = files.photo.type
        }

        conference.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: 'Error Found'
                });
            }
            res.json(result);
        });
    });
};

// delete conferences
exports.remove = (req, res) => {
    let conference = req.conference
    conference.remove((err, deletedConference) => {
        if(err) {
            return res.status(400).json({
                error: "Error On Delete"
            });
        }
        res.json({
            deletedConference,
            message: "Conference Deleted successfully"
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

        const {title,description,venue,date,about,status} = fields

        /*if(!title || !description || !venue || !date || !about || !status) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }*/

        let conference = req.conference;
        conference = _.extend(conference,fields)


        if(files.photo) {
            if(files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 10mb in size"
                });
            }
            conference.photo.data = fs.readFileSync(files.photo.path)
            conference.photo.contentType = files.photo.type
        }

        conference.save((err, result) => {
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
exports.approvedconference = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 1
    let check = { status: "Approved"}

    Conference.find(check)
        .select("-photo")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, approvedconference) => {
            if(err) {
                return res.status(400).json ({
                    error: 'Conference not found'
                });
            }
            res.json(approvedconference);
        });

};

// get the conference list added by editor
exports.conferencelist = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'

    Conference.find()
        .select("-photo")
        .sort([[sortBy, order]])
        .exec((err, conferences) => {
            if(err) {
                return res.status(400).json ({
                    error: 'Conference not found'
                });
            }
            res.json(conferences);
        });

};

// get the photo of conference
exports.photo = (req, res, next) => {
    if(req.conference.photo.data) {
        res.set('Content-Type', req.conference.photo.contentType)
        return res.send(req.conference.photo.data);
    }
    next();
};










