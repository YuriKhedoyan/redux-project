import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare (index, value) {
        return {
          payload: {
            index,
            value,
          }
        }
      }
    },
  }
})


export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer