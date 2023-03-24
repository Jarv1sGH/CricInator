import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'

export const fetchNewsDetail = createAsyncThunk('newsDetail/fetchNewsDetail', async (newsId) => {
  const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/${newsId}`, options);
  return response.data;
})


const newsDetailSlice = createSlice({
  name: 'newsDetail',
  initialState: {
    newsDetail: [],
    loading: false,
    rejected : false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsDetail.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchNewsDetail.fulfilled, (state, action) => {
        state.newsDetail = action.payload
        state.loading = false
        state.rejected = false;
      })
      .addCase(fetchNewsDetail.rejected, (state) => {
        state.loading = false;
        state.rejected = true
      })
  }
})



export default newsDetailSlice.reducer;
