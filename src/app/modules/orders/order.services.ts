import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderToDB = async (orderData: TOrder) => {
  return await Order.create(orderData);
};

export const OrderServices = {
  createOrderToDB,
};
