const mongoose = require("mongoose");

const order = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "book",
    },
    status: {
      type: String,
      default: "Ordered",
      enum: ["Ordered","Book Issued", "Book Returned", "Cancelled"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("order", order);
