import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ricette: [],
  loading: false,
  error: "",
};

export const fetchRicette = createAsyncThunk("ricette/fetchRicette", () => {
  return axios
    .get(
      "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=89534fc4705648859ad31b5faca5c398"
    )
    .then((response) => response.data);
});

const ricetteSlice = createSlice({
  name: "ricetta",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRicette.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRicette.fulfilled, (state, action) => {
      state.loading = false;
      state.ricette = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRicette.rejected, (state, action) => {
      state.loading = false;
      state.ricette = [];
      state.error = action.error.message;
    });
  },
});

export default ricetteSlice.reducer;
