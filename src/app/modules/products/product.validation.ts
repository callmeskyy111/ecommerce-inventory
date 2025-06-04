import { z } from "zod";

const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const ProductValidationSchema = z.object({
  name: z.string({
    required_error: "NAME is required!",
    invalid_type_error: "NAME must be a string!",
  }),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: z.array(InventoryValidationSchema),
});

export default ProductValidationSchema;
