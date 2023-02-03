const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    // sellerId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",
    //   required: true,
    // },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorys",
      required: true,
    },
    // manufacturer: {
    //   type: String,
    //   required: true,
    // },
    // shortDescription: {
    //   type: String,
    //   required: true,
    // },
    productInfo: {
      type: String,
      required: true,
    },
    imageKey: {
      type: String,
      required: true,
    },
    // inventory: {
    //   type: Number,
    //   min: 0,
    //   default: 10,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    // searchKeywords: {
    //   type: [String],
    //   required: true,
    // },
    // isRecommended: {
    //   type: Boolean,
    //   default: false,
    //   required: false,
    // },
    // discountPercent: {
    //   type: Number,
    //   min: 0,
    //   max: 95,
    //   default: 0,
    //   required: false,
    // },
    // sku: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports = mongoose.model("products", ProductSchema);
