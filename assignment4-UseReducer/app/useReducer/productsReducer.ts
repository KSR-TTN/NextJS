export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

type Action =
  | { type: "GET_PRODUCTS"; payload: Product[] }
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: number };

export const productsReducer = (state: { products: Product[] }, action: Action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT":
      return { ...state, products: [action.payload, ...state.products] };
    case "DELETE_PRODUCT":
      return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
    default:
      return state;
  }
};
