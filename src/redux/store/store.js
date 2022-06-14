import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from '../slicer/AuthSlicer';

export const store = configureStore({
  reducer: {
    reducer: AuthSlice,
  },
});

export default store;
