import { QuotesAction, QuotesState } from "./type";

const initialState: QuotesState = {
  items: [],
  loading: false,
  error: null,
};

export const quotesReducer = (
  state = initialState,
  action: QuotesAction
): QuotesState => {
  switch (action.type) {
    case "FETCH_QUOTES_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_QUOTES_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_QUOTES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
