import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.products;

const Products = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, messages.name],
      trim: true,
    },
    productId: {
      type: String,
      required: [true, messages.productId],
      trim: true,
    },
    price: {
      type: String,
      required: [true, messages.price],
      maxlength: 10,
      trim: true,
    },
    description: {
      type: String,
      required: [true, messages.description],
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);
const ProductsSchema = mongoose.model("products", Products, "products");
export default ProductsSchema;
