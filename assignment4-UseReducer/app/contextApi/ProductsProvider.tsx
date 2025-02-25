"use client";

import { createContext, useReducer, ReactNode, useEffect } from "react";
import { productsReducer, Product } from "./productsReducer";

interface ProductsContextType {
  products: Product[];
  getProducts: () => void;
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

const initialState: { products: Product[] } = {
  products: [],
};

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products"); // Using Fake Store API
      const data: Product[] = await res.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
