import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions';

export const fetchRecentData = createAsyncThunk('recentMatches/fetchRecentData', async () => {
    const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options);
    return response.data;

})


const recentMatchesSlice = createSlice({
    name: 'recentMatches',
    initialState: {
        recentMatches: [],
        loading: false,
        recentRejected : false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecentData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRecentData.fulfilled, (state, action) => {
                state.recentMatches = action.payload
                state.loading = false;
                state.recentRejected = false;
            })
            .addCase(fetchRecentData.rejected, (state) => {
                state.loading = false;
                state.recentRejected = true;
            })
    }
})
export default recentMatchesSlice.reducer;