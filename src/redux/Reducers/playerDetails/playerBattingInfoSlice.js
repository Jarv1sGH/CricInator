import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from '../../../apiOptions'

export const fetchPlayerBatting = createAsyncThunk('playerBatting/fetchPlayerBatting', async (playerId) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}/batting`, options);
    return response.data;
})


const playerBattingInfoSlice = createSlice({
    name: 'playerBatting',
    initialState: {
        playerBatting: [],
        playerbatLoading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerBatting.pending, (state) => {
                state.playerbatLoading = true;
            })
            .addCase(fetchPlayerBatting.fulfilled, (state, action) => {
                state.playerBatting = action.payload
                state.playerbatLoading = false;
                state.rejected = false;
            })
            .addCase(fetchPlayerBatting.rejected, (state) => {
                state.playerbatLoading = false;
                state.rejected = true;
            })
    }
})



export default playerBattingInfoSlice.reducer;
