import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../data/bookData';

const booksSlice = createSlice({
  name: 'books',
  initialState: { list: initialBooks },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
