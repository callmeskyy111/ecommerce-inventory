import mongoose from "mongoose";
import { TProduct, TVariants, TIventory } from "./product.interface";

const VariantSchema = new mongoose.Schema<TVariants>(
  {
    type: String,
    value: String,
  },
  { _id: false }
);

const InventorySchema = new mongoose.Schema<TIventory>(
  {
    quantity: Number,
    inStock: Boolean,
  },
  { _id: false }
);

// Product Schema And Model
const ProductSchema = new mongoose.Schema<TProduct>({
  name: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
