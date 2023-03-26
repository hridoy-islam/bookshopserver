const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const stockSchema = new Schema({
    stock: Number,
    bookid: {type: ObjectId, ref: 'book'},
});

module.exports = mongoose.model('stock', stockSchema);

