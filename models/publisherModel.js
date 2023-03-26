const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const publisherSchema = new Schema({
    name: String,
    details: String,
    bookid: {type: ObjectId, ref: 'book'},
});

module.exports = mongoose.model('publisher', publisherSchema);

