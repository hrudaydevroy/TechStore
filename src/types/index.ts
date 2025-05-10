export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  inStock: boolean;
  quantity?: number;
};

export type CartItem = Product & {
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
};