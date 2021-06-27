const WorkshopPayment = require('../models/workShopPaymentModel');

/**
 * Create workshop payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createWorkshopPayment = async (req, res) => {
    if(req.body) {
        const workshopPayment = new WorkshopPayment(req.body);
        await workshopPayment.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

/**
 * Get all WorkShop payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllWorkshopPayment = async (req, res) => {
    await WorkshopPayment.find({})
        .populate('workshoppayments', '_id name contactNo email depositedAmount depositedDate bank branch paymentSlip workShop')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * Get a specific WorkShop payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewPaymentById = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkshopPayment.findById(req.params.id)
            .populate('workshoppayments', '_id name contactNo email depositedAmount depositedDate bank branch paymentSlip workShop')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/**
 * Get a specific WorkShop according to paymentID controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewWorkShopByPaymentId = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkshopPayment.findById(req.params.id)
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
 * Delete a WorkShop Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = async (req, res) => {
    const id = req.params.id
    await WorkshopPayment.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

/**
 * export controllers
 * @type {{createWorkshopPayment: createWorkshopPayment,
 * getAllWorkshopPayment: getAllWorkshopPayment,
 * viewPaymentById: viewPaymentById,
 * viewWorkShopByPaymentId: viewWorkShopByPaymentId,
 * deleteById: deleteById}}
 */
module.exports = {
    createWorkshopPayment,
    getAllWorkshopPayment,
    viewPaymentById,
    viewWorkShopByPaymentId,
    deleteById
}