export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface QuotesState {
  items: Quote[];
  loading: boolean;
  error: string | null;
}

export interface FetchQuotesRequestAction {
  type: "FETCH_QUOTES_REQUEST";
}

export interface FetchQuotesSuccessAction {
  type: "FETCH_QUOTES_SUCCESS";
  payload: Quote[];
}

export interface FetchQuotesFailureAction {
  type: "FETCH_QUOTES_FAILURE";
  payload: string;
}

export type QuotesAction =
  | FetchQuotesRequestAction
  | FetchQuotesSuccessAction
  | FetchQuotesFailureAction;

export const FETCH_QUOTES_REQUEST = "FETCH_QUOTES_REQUEST";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";
