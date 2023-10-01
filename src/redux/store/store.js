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
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     immutableCheck: {
  //       // Ignore state paths, e.g. state for 'items':
  //       ignoredPaths: ['items.data'],
  //     },
  //     serializableCheck: {ignoredPaths: ['some.nested.path']},
  //   }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ['items.data'],
      },
      serializableCheck: false,
    }),
});

export default store;
