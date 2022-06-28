import { configureStore } from '@reduxjs/toolkit';

//Reducers
import subRedditsReducer from '../features/SubReddits/SubRedditsSlice'
import postsReducer from '../features/Posts/PostsSlice'
import searchBarReducer from '../features/SearchBar/SearchBarSlice'
import commentsReducer from '../features/Comments/CommentsSlice'


export default configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: postsReducer,
    search: searchBarReducer,
    comments: commentsReducer,
  }
})
