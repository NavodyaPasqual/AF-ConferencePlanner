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
 * Get all ViewWorkShop payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllWorkshopPayment = async (req, res) => {
    await WorkshopPayment.find({})
        .populate('workshops', 'workShopTitle description')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * Get a specific ViewWorkShop payment controller
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
 * Get a specific ViewWorkShop according to paymentID controller
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
 * Update a payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updatePayment = {
        status
    }
    const update = await WorkshopPayment.findByIdAndUpdate(id, updatePayment)
        .then(() => {
            res.status(200).send({status: "Payment Validated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

/**
 * Delete a ViewWorkShop Payment controller
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
    updateById,
    deleteById
}
