import mongoose from "mongoose";
import { TOrder } from "./order.interface";

// Order Schema And Model
const OrderSchema = new mongoose.Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
