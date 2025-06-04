import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Ecommerce-Inventory Server is running! ✅");
});

export default app;
