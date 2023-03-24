import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from '../../../apiOptions'

export const fetchPlayerInfo = createAsyncThunk('playerInfo/fetchPlayerInfo', async (playerId) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}`, options);
    return response.data;
})


const playerInfoSlice = createSlice({
    name: 'playerInfo',
    initialState: {
        playerInfo: [],
        playerInfoLoading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerInfo.pending, (state) => {
                state.playerInfoLoading = true;
            })
            .addCase(fetchPlayerInfo.fulfilled, (state, action) => {
                state.playerInfo = action.payload
                state.playerInfoLoading = false;
                state.rejected = false;
            })
            .addCase(fetchPlayerInfo.rejected, (state) => {
                state.playerInfoLoading = false;
                state.rejected = true;
            })
    }
})



export default playerInfoSlice.reducer;
