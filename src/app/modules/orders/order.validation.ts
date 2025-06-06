import { z } from "zod";

// Order validation-schema
const OrderValidationSchema = z.object({
  email: z.string({
    required_error: "EMAIL is required!",
    invalid_type_error: "EMAIL must be a string!",
  }),
  productId: z.string({
    required_error: "Product-ID is required!",
    invalid_type_error: "Please provide a VALID mongoDB ID as a string!",
  }),
  quantity: z
    .number({
      required_error: "Quantity is required!",
      invalid_type_error: "QUANTITY must be a number!",
    })
    .positive(),
  price: z.number({
    required_error: "PRICE is required!",
    invalid_type_error: "PRICE must be a number!",
  }),
});

export default OrderValidationSchema;
