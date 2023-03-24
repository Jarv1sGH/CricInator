import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchScorecard = createAsyncThunk('commentary/fetchScorecard', async (matchId) => {
  const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`, options);
  return response.data;
})


const scorecardSlice = createSlice({
  name: 'scorecard',
  initialState: {
    scorecard: [],
    loading: false,
    rejected : false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScorecard.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchScorecard.fulfilled, (state, action) => {
        state.scorecard = action.payload
        state.loading = false;
        state.rejected = false;
      })
      .addCase(fetchScorecard.rejected, (state) => {
        state.loading = false;
        state.rejected = true;
      })
  }
})



export default scorecardSlice.reducer;
