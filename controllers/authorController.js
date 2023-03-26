const authorModel = require("../models/authorModel");

const allAuthor = async(req, res) => {
    const authors = await authorModel.find({}).populate('bookid').limit(10).exec();
    res.send(authors);
}

const getAuthor = async(req, res) => {
    const id = req.params.id;
    const author = await authorModel.find({_id: id}).populate('bookid');
    res.send(author);
}

const createAuthor = async(req, res)=> {
    
}

const updateAuthor = async(req, res)=> {
    const id = req.params.id;
    const filter = {_id: id}
    console.log(req.body);
    const update = {name: req.body.name}
    const author = await authorModel.findOneAndUpdate(filter, update, {
        new: true,
    })
    res.send(author)
}


module.exports = {allAuthor, getAuthor, updateAuthor}