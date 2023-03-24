import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import options from './../../apiOptions'


export const fetchNewsList = createAsyncThunk('newsList/fetchNewsList', async () => {
    const response = await axios.get( 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',options);
    return response.data;
  })

  
const newsListSlice = createSlice({
    name: 'newsList',
    initialState: {
      newsList: [],
      newsLoading: true,
      newsRejected: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchNewsList.pending, (state) => {
          state.newsLoading = true
        })
        .addCase(fetchNewsList.fulfilled, (state, action) => {
          state.newsList = action.payload
          state.newsLoading = false
          state.newsRejected = false;
        })
        .addCase(fetchNewsList.rejected, (state) => {
          state.newsLoading = false;
          state.newsRejected = true;
        })
    }
  })
  
  
export default newsListSlice.reducer;