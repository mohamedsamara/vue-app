export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ICartItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}
