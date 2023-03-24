import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchLiveData = createAsyncThunk('liveMatches/fetchLiveData', async () => {
  const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options);
  return response.data;

})


const liveMatchesSlice = createSlice({
  name: 'liveMatches',
  initialState: {
    liveMatches: [],
    loading: false,
    liveRejected: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLiveData.fulfilled, (state, action) => {
        state.liveMatches = action.payload
        state.loading = false
        state.liveRejected = false;
      })
      .addCase(fetchLiveData.rejected, (state) => {
        state.loading = false;
        state.liveRejected = true;
      })
  }
})



export default liveMatchesSlice.reducer;
