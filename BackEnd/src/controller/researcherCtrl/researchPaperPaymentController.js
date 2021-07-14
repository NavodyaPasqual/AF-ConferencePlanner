const ResearchPaperPayment = require('../../models/researcherModel/researchPaperPaymentModel');

const createResearchPaperPayment = async (req, res) => {
    if(req.body) {
        const researchPaperPayment = new ResearchPaperPayment(req.body);
        await researchPaperPayment.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const viewResearchPaperPayment = async (req, res) => {
    await ResearchPaperPayment.find({})
        .populate('researchpaperpayment', '_id name contactNo email depositedAmount depositedDate bank branch paymentSlip')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewPaymentById = async (req, res) => {
    if (req.params && req.params.id) {
        await ResearchPaperPayment.findById(req.params.id)
            .populate('researchpaperpayment', '_id name contactNo email depositedAmount depositedDate bank branch paymentSlip')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const deleteById = async (req, res) => {
    const id = req.params.id
    await ResearchPaperPayment.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

module.exports = {
    createResearchPaperPayment,
    viewResearchPaperPayment,
    viewPaymentById,
    deleteById
};