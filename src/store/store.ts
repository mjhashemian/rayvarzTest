import { configureStore } from '@reduxjs/toolkit';
import idSlice from "./id"

export default configureStore({
  reducer: {
    idSlice,
  },
});
