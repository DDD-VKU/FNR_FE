import { ChangeEvent, FormEvent } from "react";
export async function getStaticProps() {
  const baseUrl = process.env.BASE_URL;
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
  id: string;
  name: string;
  description?: string;
  price: IProducts_Prices;
  products_images: IImage;
  categories: ICategories;
  SKU?: string;
  products_details?: IProductDetail;
  tags: string[];
}
export interface IImage {
  id: string;
  images: string[];
}
export interface ICategories {
  id: string;
  name: string;
  //   sku?: string;
}

export interface IProductDetail {
  id: string;
  sort_description: string;
  long_description: string;
  dimensions: IDimensions;
}

export interface IProducts_Prices {
  id: string;
  price: number;
  sale_percent: number;
  products_id: number;
}

export interface IDimensions {
  id: string;
  width: number;
  height: number;
  depth: number;
  weight: number;
  seat_height?: number;
  leg_height?: number;
  products_dimensions_details_id: number;
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
