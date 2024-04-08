import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cardOneSliceReducer from "./cardOneSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        CardOne: cardOneSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
