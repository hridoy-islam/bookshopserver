const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const authorSchema = new Schema({
    name: String,
    bookid: {type: ObjectId, ref: 'book'},
});

module.exports = mongoose.model('author', authorSchema);

