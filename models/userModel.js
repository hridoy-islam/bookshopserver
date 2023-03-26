const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String },
    address: {
      street: { type: String},
      suite: { type: String},
      city: { type: String},
      zipcode: { type: String},
    },
    phone: { type: String },
    website: { type: String },
    role: {
      type: Number,
      default: 1,
      // 0 = Admin 
      // 1 = customer
    },
  },
  { timestamps: true }
);

module.exports = model("user", UserSchema);