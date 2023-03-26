const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const orderSchema = new Schema({
    userid : {type: ObjectId, ref: 'user'},
    orderdate: { type: Date, default: Date.now },
    subtotal: Number,
    shipping: Number,
    total: Number,
});

module.exports = mongoose.model('order', orderSchema);