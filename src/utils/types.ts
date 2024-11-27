import { ChangeEvent, FormEvent } from "react";
export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
}
export type FormSubmit = FormEvent<HTMLFormElement>;
export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
// state

export type AppState = {
  auth: IAuthState;
  cart: ICart;
};
export interface IAuthState {
  user: IUser;
  isAuthenticated: boolean;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface ICart {
  items: ICartItem[];
  numberOfItems: number;
  subTotal: number;
}

export interface IProduct {
  _id: number;
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

export interface IProductItem {
  _id: number;
  name?: string;
  type?: string;
  image?: string;
  price: IProductPrice;
  created_at: string;
}

export interface IProductPrice {
  price: number;
  sale_percent: number;
}

export interface IProductInShop {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  sale_percent: number;
  created_at: string;
}
export interface IProductBase {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

export interface IProductCompare extends IProductBase {
  general: {
    sales_package: string;
    model_number: string;
    secondary_material: string;
    configuration: string;
    upholstery_material: string;
    upholstery_color: string;
  };

  dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
    seat_height: string;
    leg_height: string;
  };

  warranty: {
    summary: string;
    service_type: string;
    covered_items: string;
    excluded_items: string;
    domestic_warranty: string;
  };
}

export interface IComparePageProps {
  products: IProductCompare[];
}
