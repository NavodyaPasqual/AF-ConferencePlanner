const ContactUs = require('../../models/contactUsModel/contactUsModel');

/**
 * Create contact us controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createContactUs = async (req, res) => {
    if(req.body) {
        const contactUs = new ContactUs(req.body);
        await contactUs.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

/**
 * Get all ContactUs controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewAllContactUs = async (req, res) => {
    await ContactUs.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * export controllers
 * @type {{createContactUs: createContactUs,
 * viewAllContactUs: viewAllContactUs}}
 */
module.exports = {
    createContactUs,
    viewAllContactUs
}