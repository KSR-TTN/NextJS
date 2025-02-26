import { createStore } from "redux";
import { quotesReducer } from "./quotesReducer";


export type RootState = ReturnType<typeof quotesReducer>;

export const store = createStore(quotesReducer);
