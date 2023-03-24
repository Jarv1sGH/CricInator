import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (matchType) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/${matchType}`, options);
    return response.data;
})


const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        schedule: [],
        loading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchedule.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSchedule.fulfilled, (state, action) => {
                state.schedule = action.payload
                state.loading = false;
                state.rejected = false;
            })
            .addCase(fetchSchedule.rejected, (state) => {
                state.loading = false;
                state.rejected = true;
            })
    }
})



export default scheduleSlice.reducer;
