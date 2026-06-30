import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    cartCoins: Record<string, number>;
    prices: Record<string, number>; 
  }

const initialState: CartState = {
  cartCoins: {},
  prices: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
   
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;