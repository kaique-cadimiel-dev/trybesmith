export type Product = {
  id: number;
  name: string;
  price: string;
  userId: number;
};

export type InsertProduct = {
  status: number,
  data: Product | { message: string }
};

export type GetAllProduct = {
  status: number,
  data: Product[]
};
