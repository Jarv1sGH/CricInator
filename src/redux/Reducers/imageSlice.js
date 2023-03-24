import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchImage = createAsyncThunk('image/fetchImage', async (imageId) => {
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg?p=de`, { ...options, responseType: 'blob' });
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
})


const imageSlice = createSlice({
    name: 'image',
    initialState: {
        image: [],
        imageLoading: false,
        rejected: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImage.pending, (state) => {
                state.imageLoading = true;
            })
            .addCase(fetchImage.fulfilled, (state, action) => {
                state.image = action.payload;
                state.imageLoading = false;
                state.rejected = false;
            })
            .addCase(fetchImage.rejected, (state) => {
                state.imageLoading = false;
                state.rejected = true;
            })
    }
})



export default imageSlice.reducer;
