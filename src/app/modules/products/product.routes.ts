import { Router } from "express";
import { ProductControllers } from "./product.controller";

const productRouter = Router();

productRouter.post("/", ProductControllers.createProduct);
productRouter.get("/", ProductControllers.getAllProducts);
productRouter.get("/:productId", ProductControllers.getSingleProduct);

export default productRouter;
