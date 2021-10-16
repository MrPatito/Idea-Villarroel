import { items } from "../mock/products";

export const getCategoryProductsById = (id) => {
  return items.filter((item) => item.potencia === id);
};
