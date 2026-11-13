export interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity?: number;
  description?: string;
  category?: string;
  rating?: number | {
    rate: number;
    count: number;
  };
  reviews?: number;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address?: string;
  avatar?: string;
}

export interface State {
  wishlist: Product[];
  cart: Product[];
  isLogin: boolean;
  user?: User;
  isHydrated?: boolean;
}

export type Action =
  | { type: "INIT_STORE"; payload: { wishlist: Product[]; cart: Product[]; isLogin: boolean; user?: User } }
  | { type: "ADD_TO_WISHLIST"; payload: Product }
  | { type: "REMOVE_FROM_WISHLIST"; payload: number }
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "SET_TO_LOGIN"; payload: { isLogin: boolean; user?: User } }
  | { type: "MOVE_TO_WISHLIST"; payload: Product }
  | { type: "INCREASE_QUANTITY"; payload: Product }
  | { type: "DECREASE_QUANTITY"; payload: Product };
