import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchCommentary = createAsyncThunk('commentary/fetchCommentary', async (matchId) => {
  const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/comm`, options);
  return response.data;
})


const commentarySlice = createSlice({
  name: 'commentary',
  initialState: {
    commentary: [],
    loading: false,
    rejected : false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentary.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCommentary.fulfilled, (state, action) => {
        state.commentary = action.payload
        state.loading = false
        state.rejected = false;
      })
      .addCase(fetchCommentary.rejected, (state) => {
        state.loading = false;
        state.rejected = true
      })
  }
})



export default commentarySlice.reducer;
