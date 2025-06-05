import { Router } from "express";
import { ProductControllers } from "./product.controller";

const productRouter = Router();

productRouter.post("/", ProductControllers.createProduct);
productRouter.get("/", ProductControllers.getAllProducts);
productRouter.get("/:productId", ProductControllers.getSingleProduct);
productRouter.put("/:productId", ProductControllers.updateProduct);
productRouter.delete("/:productId", ProductControllers.deleteProduct);

export default productRouter;
