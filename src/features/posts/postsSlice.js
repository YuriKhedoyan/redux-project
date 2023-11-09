import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ value: "", order: 1 }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const { index, value, order } = action.payload;
      const posts = state;

      if (value === "" && posts.length > 1) {
        return posts.filter((el, ind) => ind !== index);
      } else if (index === posts.length - 1 && value.length === 1) {
        posts.push({ value: "", order: index + 2 });
      }
      posts[index].value = value;
    },
  },
});

export const { updatePost } = postsSlice.actions;

export default postsSlice.reducer;
