// reducers.js
import { createReducer } from '@reduxjs/toolkit';
import { fetchFirestoreData } from './action';

const initialState = {
  firestoreData: [],
  loading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFirestoreData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchFirestoreData.fulfilled, (state, action) => {
      state.loading = false;
      state.firestoreData = action.payload;
    })
    .addCase(fetchFirestoreData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    
});

export default reducer;
