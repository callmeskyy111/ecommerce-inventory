import { Request, Response } from "express";
//import Order from "./order.model";
import OrderValidationSchema from "./order.validation";
import Product from "../products/product.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    //first, zod-validation
    const zodValidation = OrderValidationSchema.safeParse(req.body);
    if (
      typeof zodValidation.error !== "undefined" &&
      zodValidation.error.name === "ZodError"
    ) {
      const errorList = zodValidation.error.issues.map((err) => err.message);
      res.status(500).json({
        success: false,
        message: "Validation ERROR 🔴",
        errors: errorList,
      });
    }
    if (zodValidation.success) {
      const product = await Product.findById(zodValidation.data.productId);
      if (product && product.inventory.quantity < zodValidation.data.quantity) {
        return res.status(400).json({
          success: false,
          message: "Insufficient quantity in this inventory! 🔴",
        });
      }
      if (product) {
        product.inventory.quanity =
          product.inventory.quantity - zodValidation.data.quantity;
        product.inventory.inStock =
          product.inventory.quantity === 0 ? false : true;
        const newOrder = await   
      }
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully ✅",
      //product: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "🔴SOMETHING WENT WRONG ⚠️",
      error: error,
    });
    console.log(error);
  }
};

export const OrderControllers = {
  createOrder,
};
