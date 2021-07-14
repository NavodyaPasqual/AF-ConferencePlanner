const Attendee = require('../../models/attendeeModel/attendeeModel');

/**
 * Create attendeeCtrl controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createAttendee = async (req, res) => {
    if(req.body) {
        const attendee = new Attendee(req.body);
        await attendee.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

/**
 * Get all attendeeCtrl controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllAttendee = async (req, res) => {
    await Attendee.find({})
        .populate('workshops', 'workShopTitle description')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * Get a specific AttendeeWorkshopRegistration controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewAttendeeById = async (req, res) => {
    if (req.params && req.params.id) {
        await Attendee.findById(req.params.id)
            .populate('attendees', '_id name contactNo email affiliation interest workshops')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/**
 * Get a specific ViewWorkShop according to AttendeeWorkshopRegistration controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewWorkShopByAttendeeId = async (req, res) => {
    if (req.params && req.params.id) {
        await Attendee.findById(req.params.id)
            .populate('workshops', '_id organizerName description proposalURL')
            .then(response => {
                res.status(200).send({ data: response.workshops});
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/**
 * Update a ViewWorkShop controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateAttendee = {
        status
    }
    const update = await Attendee.findByIdAndUpdate(id, updateAttendee)
        .then(() => {
            res.status(200).send({status: "Attendee Registration Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

/**
 * Delete a attendeeCtrl controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = async (req, res) => {
    const id = req.params.id
    await Attendee.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

/**
 * export controllers
 * @type {{createAttendee: createAttendee,
 * getAllAttendee: getAllAttendee,
 * viewAttendeeById: viewAttendeeById,
 * viewWorkShopByAttendeeId: viewWorkShopByAttendeeId,
 * updateById: updateById,
 * deleteById: deleteById}}
 */
module.exports = {
    createAttendee,
    getAllAttendee,
    viewAttendeeById,
    viewWorkShopByAttendeeId,
    updateById,
    deleteById
}
