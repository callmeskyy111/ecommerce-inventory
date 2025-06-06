import { Router } from "express";
import { OrderControllers } from "./order.controller";

const orderRouter = Router();

orderRouter.post("/", OrderControllers);

export default orderRouter;
