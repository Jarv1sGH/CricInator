import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from '../../../apiOptions'

export const fetchPlayerBowling = createAsyncThunk('playerBowling/fetchPlayerBowling', async (playerId) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}/bowling`, options);
    return response.data;
})


const playerBowlingInfoSlice = createSlice({
    name: 'playerBowling',
    initialState: {
        playerBowling: [],
        playerBowlLoading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerBowling.pending, (state) => {
                state.playerBowlLoading = true;
            })
            .addCase(fetchPlayerBowling.fulfilled, (state, action) => {
                state.playerBowling = action.payload
                state.playerBowlLoading = false;
                state.rejected = false;
            })
            .addCase(fetchPlayerBowling.rejected, (state) => {
                state.playerBowlLoading = false;
                state.rejected = true;
            })
    }
})



export default playerBowlingInfoSlice.reducer;
