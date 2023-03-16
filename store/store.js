import { configureStore } from '@reduxjs/toolkit';
import BookmarkSlice from './reducers/Bookmark';
export default store = configureStore({
  reducer: {
    bookmark: BookmarkSlice,
  },
});
