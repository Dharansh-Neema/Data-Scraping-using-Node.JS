const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title of the product is required"],
    minLenght: [3, "Product name/title should be atleast of 3 characters"],
  },
  price: {
    type: String,
    required: [true, "Product Price is required"],
  },
  description: String,
  numberOfRating: String,
  numberOfReview: String,
  rating: {
    type: Number,
    min: [1, "Product Rating can't be less than 1"],
    max: [5, "Product Rating can't be greater than 5"],
  },
  mediacount: Number,
});
module.exports = mongoose.model("product", productSchema);
