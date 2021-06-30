const WorkShop = require('../models/workShopModel');

/**
 * Create workshop controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createWorkshop = async (req, res) => {
    if(req.body) {
        const workShop = new WorkShop(req.body);
        await workShop.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

/**
 * Get all ViewWorkShop controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewAllWorkshops = async (req, res) => {
    await WorkShop.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * Get a specific ViewWorkShop controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewById = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkShop.findById(req.params.id)
            .populate('workshops', '_id organizerName organizerContactNo organizerEmail description proposalURL')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/**
 * Delete a ViewWorkShop controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = async (req, res) => {
    const id = req.params.id
    await WorkShop.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
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
    const updateWorkShop = {
        status
    }
    const update = await WorkShop.findByIdAndUpdate(id, updateWorkShop)
        .then(() => {
            res.status(200).send({status: "ViewWorkShop Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

/**
 * export controllers
 * @type {{createWorkshop: createWorkshop,
 * viewAllWorkshops: viewAllWorkshops,
 * viewById: viewById,
 * deleteById: deleteById,
 * updateById: updateById}}
 */
module.exports = {
    createWorkshop,
    viewAllWorkshops,
    viewById,
    deleteById,
    updateById
}