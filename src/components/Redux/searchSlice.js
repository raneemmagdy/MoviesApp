import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  searchTerm: '',
  searchResults: [],
  loading: false,
  error: null,
};


export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
      ,{headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkwMGM3NzA2ZmM1MTlmMDYyN2RlNmI4ZWY2ZTI2ZiIsIm5iZiI6MTczMTUwMzc3Ni40NzA3NDUsInN1YiI6IjY3MzI2NDgyN2VmMmMzMWQ3OGVkYzEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9qmb3x5NCuhkGgEBxsf13n0hCd40RpjcIM7UqUEvFw'
      }});
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


let searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
        state.searchResults = payload;
        state.loading = false;
      })
      .addCase(fetchSearchResults.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
