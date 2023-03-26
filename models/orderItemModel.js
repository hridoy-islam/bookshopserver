const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const orderitemSchema = new Schema({
    bookid: {type: ObjectId, ref: 'book'},
    quantity: Number,
    price: Number,
});

module.exports = mongoose.model('orderitem', orderitemSchema);

