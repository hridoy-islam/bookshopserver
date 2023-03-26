const publisherModel = require("../models/publisherModel");

const allPublisher = async(req, res) => {
    const publusher = await publisherModel.find({}).populate('bookid').limit(10).exec();
    res.send(publusher);
}

const getPublisher = async(req, res) => {
    const id = req.params.id;
    const publisher = await publisherModel.find({_id: id}).populate('bookid');
    res.send(publisher);
}

const updatePublisher = async(req, res) => {
    const id = req.params.id;
    const filter = {_id: id};
    const update = {name: req.body.name};
    const publisher = await publisherModel.findOneAndUpdate(filter, update, {new : true})
    res.send(publisher);
}

module.exports = {allPublisher, getPublisher, updatePublisher}