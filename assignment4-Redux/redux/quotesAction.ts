import { Dispatch } from "redux";
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
  QuotesAction,
  Quote,
} from "./type";

export const fetchQuotesRequest = (): QuotesAction => ({
  type: FETCH_QUOTES_REQUEST,
});

export const fetchQuotesSuccess = (quotes: Quote[]): QuotesAction => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quotes,
});

export const fetchQuotesFailure = (error: string): QuotesAction => ({
  type: FETCH_QUOTES_FAILURE,
  payload: error,
});

export const fetchQuotes = () => {
  return async (dispatch: Dispatch<QuotesAction>) => {
    dispatch(fetchQuotesRequest());
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      dispatch(fetchQuotesSuccess(data.quotes));
    } catch (error) {
      dispatch(fetchQuotesFailure((error as Error).message));
    }
  };
};
