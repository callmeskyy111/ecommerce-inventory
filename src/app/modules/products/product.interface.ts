export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TIventory;
};

export type TVariants = {
  type: string;
  value: string;
};

export type TIventory = {
  quantity: number;
  inStock: boolean;
};
