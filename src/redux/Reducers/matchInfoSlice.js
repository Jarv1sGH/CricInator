import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchMatchInfo = createAsyncThunk('matchInfo/fetchMatchInfo', async (matchId) => {
  const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`, options);
  return response.data;
})


const matchInfoSlice = createSlice({
  name: 'matchInfo',
  initialState: {
    matchInfo: [],
    loading: false,
    rejected : false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchInfo.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMatchInfo.fulfilled, (state, action) => {
        state.matchInfo = action.payload
        state.loading = false;
        state.rejected = false;
      })
      .addCase(fetchMatchInfo.rejected, (state) => {
        state.loading = false;
        state.rejected = true
      })
  }
})



export default matchInfoSlice.reducer;
