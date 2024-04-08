import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardOne: {
    title: " LFC Card One",
    content: "LFC Stats",
  },
  data: [],

};


const cardOneSlice = createSlice({

    name: "cardOne",
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload;
        }
    }


});

export const {getData} = cardOneSlice.actions;
export default cardOneSlice.reducer;