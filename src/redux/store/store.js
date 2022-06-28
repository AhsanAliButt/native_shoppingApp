import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slicer/userSlice';
import authReducer from '../slicer/AuthSlicer';
import cartReducer from '../slicer/cartSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,
    devTools: true,
  },
});

export default store;
