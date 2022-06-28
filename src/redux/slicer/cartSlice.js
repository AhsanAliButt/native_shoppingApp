import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {value: 0},
  reducers: {
    // add your non-async reducers here
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    // add your async reducers here
  },
});
// Action creators
export const {increment, decrement, incrementByAmount} = cartSlice.actions;
export default cartSlice.reducer;
