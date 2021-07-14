const Researcher = require('../../models/researcherModel/researcherModel');

const createResearchPaper = async (req,res) => {
    if(req.body) {
        const researchppr = new Researcher(req.body);
        await researchppr.save().then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}
const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const researcher = {
        status
    }
    const update = await Researcher.findByIdAndUpdate(id, researcher)
        .then(() => {
            res.status(200).send({status: "research paper status Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

const viewResearchPapers = async (req, res) => {
    await Researcher.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewResearchPapersById = async (req, res) => {
    if (req.params && req.params.id) {
        await Researcher.findById(req.params.id)
            .populate('researches', '_id title description author email number paper')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const deleteResearchPapersById = async (req, res) => {
    const id = req.params.id
    await Researcher.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}
module.exports = {
    createResearchPaper,
    viewResearchPapers,
    viewResearchPapersById,
    updateById,
    deleteResearchPapersById
};