"use client";

import React, { createContext, useReducer, useEffect, ReactNode, useRef } from "react";
import AppReducer from "./AppReducer";
import { State, User, Product } from "./types";

// SSR-safe Initial state
const initialState: State = {
  isLogin: false,
  wishlist: [],
  cart: [],
  isHydrated: false,
};

export interface GlobalContextProps {
  wishlist: Product[];
  cart: Product[];
  isLogin: boolean;
  user?: User;
  isHydrated: boolean;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  moveToWishlist: (product: Product) => void;
  setLogin: (isLogin: boolean, user?: User) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const isFirstRender = useRef(true);

  // Client-side safe hydration from localStorage
  useEffect(() => {
    try {
      let wishlist: Product[] = [];
      let cart: Product[] = [];
      let user: User | undefined = undefined;
      let isLogin = false;

      if (typeof window !== "undefined") {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist && storedWishlist !== "undefined" && storedWishlist !== "null") {
          try {
            wishlist = JSON.parse(storedWishlist);
          } catch {
            wishlist = [];
          }
        }

        const storedCart = localStorage.getItem("cart");
        if (storedCart && storedCart !== "undefined" && storedCart !== "null") {
          try {
            cart = JSON.parse(storedCart);
          } catch {
            cart = [];
          }
        }

        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
          try {
            user = JSON.parse(storedUser);
          } catch {
            user = undefined;
          }
        }

        const storedLogin = localStorage.getItem("isLogin");
        isLogin = storedLogin === "true" || (Boolean(user) && storedLogin !== "false");
      }

      dispatch({
        type: "INIT_STORE",
        payload: { wishlist, cart, isLogin, user },
      });
    } catch (e) {
      console.error("Failed to hydrate state from localStorage:", e);
      dispatch({
        type: "INIT_STORE",
        payload: { wishlist: [], cart: [], isLogin: false, user: undefined },
      });
    }
  }, []);

  // Save changes to localStorage after initial hydration
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist || []));
        localStorage.setItem("cart", JSON.stringify(state.cart || []));
        if (state.user) {
          localStorage.setItem("user", JSON.stringify(state.user));
        } else {
          localStorage.removeItem("user");
        }
        localStorage.setItem("isLogin", state.isLogin ? "true" : "false");
      } catch (e) {
        console.error("Failed to persist state to localStorage:", e);
      }
    }
  }, [state.wishlist, state.cart, state.user, state.isLogin]);

  const addToWishlist = (product: Product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (id: number) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const increaseQuantity = (product: Product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  const decreaseQuantity = (product: Product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  const setLogin = (isLogin: boolean, user?: User) => {
    // Immediately persist to localStorage synchronously to prevent race conditions
    if (typeof window !== "undefined") {
      try {
        if (isLogin && user) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          localStorage.setItem("isLogin", "false");
          localStorage.removeItem("user");
        }
      } catch (e) {
        console.error("Failed to save auth state to localStorage:", e);
      }
    }
    dispatch({ type: "SET_TO_LOGIN", payload: { isLogin, user } });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const moveToWishlist = (product: Product) => {
    dispatch({ type: "MOVE_TO_WISHLIST", payload: product });
  };

  return (
    <GlobalContext.Provider
      value={{
        wishlist: state.wishlist,
        cart: state.cart,
        isLogin: state.isLogin,
        user: state.user,
        isHydrated: state.isHydrated ?? false,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        moveToWishlist,
        setLogin,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
