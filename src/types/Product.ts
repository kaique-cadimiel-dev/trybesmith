export type Product = {
  id: number;
  name: string;
  price: string;
  userId: number;
};

export type InsertProduct = {
  status: number,
  data: Product
};

export type GetAllProduct = {
  status: number,
  data: Product[]
};
