const publisherModel = require("../models/publisherModel");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const { faker } = require("@faker-js/faker");
const mongoose = require('mongoose');


const allbooks = async(req, res) => {
    const books = await bookModel.find({}).populate('author').populate('publisher').limit(7).exec();
    res.send(books);
}

const getbook = async(req, res) => {
    const id = req.params.id
    const book = await bookModel.findOne({_id: id}).populate('author').populate('publisher');
    res.send(book);
}

const updatebook = (req, res) => {
    res.send('Update book');
}

const deletebook = async(req, res) => {
    const id = req.params.id
    const book = await bookModel.deleteOne({id});
    res.send(book);
}
const addbook = (req, res) => {
    res.send('add book')
}

const fakebooks = async(req, res) => {
    for (let i = 0; i < 2000; i++) {

        const bookid = new mongoose.Types.ObjectId();
        const authorid = new mongoose.Types.ObjectId();
        const publisherid = new mongoose.Types.ObjectId();
        
        let book = new bookModel({
            _id: bookid,
            title: faker.commerce.productName(),
            photo: faker.image.abstract(),
            author: authorid,
            publisher: publisherid,
            stock: faker.datatype.number({ min: 10, max: 199 }),
            description: faker.commerce.productDescription(),
            genre: faker.commerce.department(),
            price: faker.commerce.price(),
            publication_year: faker.date.birthdate(),
            status: faker.datatype.boolean(),
        });
        
        let author = new authorModel({
            _id: authorid,
            name: faker.name.fullName(),
            bookid,
        })
        
        let publisher = new publisherModel({
            _id: publisherid,
            name: faker.company.name(),
            details: faker.commerce.productDescription(),
            bookid,
        })
        publisher.save();
        book.save();
        author.save();
    }
    
    res.send('fake books done!!!');
}


const fakeDeleteAll = async(req, res) =>{
    // bookModel.deleteMany({}).then(function(){
        
    //     console.log("Data deleted"); // Success
    // }).catch(function(error){
    //     console.log(error); // Failure
    // });
    authorModel.deleteMany({})
    //publisherModel.deleteMany({})

    res.send('Deleted All');
}

module.exports = { fakebooks,fakeDeleteAll, allbooks, addbook, getbook, updatebook, deletebook }