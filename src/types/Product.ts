export type Product = {
  id: number;
  name: string;
  price: string;
  userId: number;
};

export type ProductServer = {
  status: number,
  data: Product
};
