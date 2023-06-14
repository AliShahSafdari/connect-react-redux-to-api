import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://randomuser.me/api/?results=5';
const initialState = {
  userItem: [],
  isLoading: false,
  error: false,
};

export const getUserItems = createAsyncThunk('user/getUserItem', () => {
  return fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));
});


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserItems.fulfilled]: (state,action) => {
      state.isLoading = false;
      state.userItem = action.payload.results;
    },
    [getUserItems.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
