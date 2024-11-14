export interface ICart {
  items: ICartItem[];
  numberOfItems: number;
  subTotal: number;
}

export interface IProduct {
  _id: string;
  name: string;
  description?: string;
  price: number;
  images?: string[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IRegister {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface ILogin {
  email: string;
  password: string;
}
