import { configureStore } from '@reduxjs/toolkit';

//Reducers
import subRedditsReducer from '../features/SubReddits/SubRedditsSlice'
import postsReducer from '../features/Posts/PostsSlice'


export default configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: postsReducer

  }
})
