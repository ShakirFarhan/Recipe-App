import { createSlice } from '@reduxjs/toolkit';
const BookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    ids: [],
  },
  reducers: {
    addBookmark: (state, { payload }) => {
      state.ids.push(payload.id);
    },
    removeBookmark: (state, { payload }) => {
      state.ids.splice(state.ids.indexOf(payload.id), 1);
    },
  },
});
export const { addBookmark, removeBookmark } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
