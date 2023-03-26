const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const BookSchema = new Schema({
    title: String,
    photo: String,
    author: { type: ObjectId, ref: 'author' },
    publisher: { type: ObjectId, ref: 'publisher' },
    stock: Number,
    description: String,
    genre: String,
    price: Number,
    publication_year: String,
    status: Boolean,
},
    { timestamps: true }
);

module.exports = mongoose.model('book', BookSchema);

