import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { ProductServices } from "./product.services";
import { error } from "console";

const createProduct = async (req: Request, res: Response) => {
  //   res.send("Product Route ✅");
  try {
    //first, zod-validation
    const zodParser = ProductValidationSchema.parse(req.body);
    const result = await ProductServices.createAProductToDB(zodParser);
    res.status(200).json({
      success: true,
      message: "Product created successfully ✅",
      product: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "SOMETHING WENT WRONG ⚠️",
      error: error,
    });
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsFromDB();
  res.status(200).json({
    success: true,
    message: "Products fetched successfully ✅",
    products: result,
  });
  console.log(` ✅RESULT: ${result}`);
};

//exports
export const ProductControllers = {
  createProduct,
  getAllProducts,
};
