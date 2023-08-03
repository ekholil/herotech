import { Iproduct } from "@/components/Featured";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Iproduct[] = [];

export const buidlerSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Iproduct>) => {
      const indexToReplace = state.findIndex(
        (product) => product.category === action.payload.category
      );

      if (indexToReplace !== -1) {
        state.splice(indexToReplace, 1, action.payload);
      } else {
        state.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<Iproduct>) => {
      const index = state.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clear: (state) => {
      state.splice(0);
    },
  },
});

export const { add, remove, clear } = buidlerSlice.actions;

export default buidlerSlice.reducer;
