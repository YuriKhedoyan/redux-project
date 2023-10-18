import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

const persistConfig = {
  key: "posts",
  version: 1,
  storage
}

const reducer = combineReducers({
  posts: postsReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})


export const persistor = persistStore(store);