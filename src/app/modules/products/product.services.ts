import { TProduct } from "./product.interface";
import Product from "./product.model";

const createAProductToDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductsFromDB = async (searchTerm = "") => {
  const query = searchTerm
    ? { name: { $regex: searchTerm, $options: "i" } }
    : {};
  const data = await Product.find(query);
  return data;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductToDB = async (productId: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, data, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createAProductToDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductToDB,
  deleteProductFromDB,
};
