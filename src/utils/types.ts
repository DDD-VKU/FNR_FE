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

export interface IProduct {
  name: string;
}
