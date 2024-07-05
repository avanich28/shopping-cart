const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Order must have user."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tax: {
    type: Number,
    required: [true, "Order must have tax."],
  },
  totalPrice: {
    type: Number,
    required: [true, "Order must have total price."],
  },
  cart: [
    {
      name: String,
      unitPrice: Number,
      quantity: Number,
    },
  ],
  // cart: {
  //   type: Array,
  //   required: [true, "Please add items in the cart!"],
  // },
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
