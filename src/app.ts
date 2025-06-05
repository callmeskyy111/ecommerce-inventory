import express from "express";
import cors from "cors";
import productRouter from "./app/modules/products/product.routes";
const app = express();

const PORT = process.env.PORT || 3000;

// parser options
app.use(express.json());
app.use(cors());

//routes
app.use("/api/products", productRouter);

app.get("/",(_,res)=>{
  res.send('ECommerce-Inventory Server is running... ✅')
});

export default app;
