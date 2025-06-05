import { Router } from "express";
import { ProductControllers } from "./product.controller";

const productRouter = Router();

productRouter.post("/", ProductControllers.createProduct);

export default productRouter;
