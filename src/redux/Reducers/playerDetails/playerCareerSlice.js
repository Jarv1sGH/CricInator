import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from '../../../apiOptions'

export const fetchPlayerCareer = createAsyncThunk('playerCareer/fetchPlayerCareer', async (playerId) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}/career`, options);
    return response.data;
})


const playerCareerSlice = createSlice({
    name: 'playerCareer',
    initialState: {
        playerCareer: [],
        playerCareerLoading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerCareer.pending, (state) => {
                state.playerCareerLoading = true;
            })
            .addCase(fetchPlayerCareer.fulfilled, (state, action) => {
                state.playerCareer = action.payload
                state.playerCareerLoading = false;
                state.rejected = false;
            })
            .addCase(fetchPlayerCareer.rejected, (state) => {
                state.playerCareerLoading = false;
                state.rejected = true;
            })
    }
})



export default playerCareerSlice.reducer;
