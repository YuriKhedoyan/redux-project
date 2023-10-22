import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    postUpdated: (state, action) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index].value = value;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
