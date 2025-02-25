"use client";

import { createContext, useReducer, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductsContextType {
  products: Product[];
  getProducts: () => void;
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

const initialState: { products: Product[] } = {
  products: [],
};

// Reducer Function
const productsReducer = (state: { products: Product[] }, action: any) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create Context
export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

// Provider Component
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
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
