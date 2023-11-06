import { createSlice } from '@reduxjs/toolkit';

const initialState = [{value: ""}];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const { index, value } = action.payload;
      console.log(action)
      const posts = state;

      if (value === "" && posts.length > 1) {
        console.log(index, value, posts)
        return posts.filter((el, ind) => ind !== index);
      } else if (index === posts.length - 1 && value.length === 1) {
        posts.push({value: ""});
      }

      posts[index].value = value;
    }
  },
});

export const { updatePost } = postsSlice.actions;

export default postsSlice.reducer;
