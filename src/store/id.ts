import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setId } = idSlice.actions;
export const selectId = (state: any) => state.idSlice.id;

export default idSlice.reducer;
