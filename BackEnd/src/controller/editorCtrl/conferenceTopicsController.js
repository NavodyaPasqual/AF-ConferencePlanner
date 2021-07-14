const Topic = require('../../models/editorModel/conferenceTopicModel');
const slugify = require("slugify");
const _ = require("lodash");
const fs = require("fs");

exports.create = (req, res) => {
   // console.log(req.body);
    const {title, content, status} = req.body
    const slug = slugify(title)
    // validate
    switch (true) {
        case !title:
            return res.status(400).json({ error : 'Title is required!'});
            break;

        case !content:
            return res.status(400).json({ error : 'Content is required!'});
            break;
    }

    // create post
    Topic.create({title, content, status, slug}, (err, topic) => {
        if(err) {
            console.log(err)
            res.status(400).json({error : 'Duplicate Topic. Try another title!' })
        }
        res.json(topic);
    })
}

exports.approvedlist = (req, res) => {

    Topic.find({status: "Approved"})
        .sort({createdAt: -1})
        .exec((err, topics) => {
        if(err) console.log(err);
        res.json(topics);
    });
};

exports.list = (req, res) => {

    Topic.find({})
        .sort({createdAt: -1})
        .exec((err, topics) => {
            if(err) console.log(err);
            res.json(topics);
        });
};

exports.read = (req, res) => {
    const { slug } = req.params
    console.log(req.params.slug)
    Topic.findOne({slug})
        .exec((err, topic) => {
            if(err) console.log(err);
            res.json(topic);
        });
};

exports.update = (req, res) => {
    const { slug } = req.params
    const {title, content, status} = req.body
    Topic.findOneAndUpdate({slug}, {title,content,status}, {new: true})
        .exec((err,topic) => {
            if(err) console.log(err)
            res.json(topic);
        })
};

exports.remove = (req, res) => {
    const { slug } = req.params
    // console.log(req.params.slug)
    Topic.findOneAndRemove({slug})
        .exec((err, topic) => {
            if(err) console.log(err);
            res.json({
                message: 'Topic Deleted'
            });
        });
};
