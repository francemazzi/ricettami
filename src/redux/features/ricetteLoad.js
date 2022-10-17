import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ricette: [],
  loading: "load",
  error: "",
};

const MEMO_URL =
  "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=89534fc4705648859ad31b5faca5c398";

export const fetchRicette = createAsyncThunk(
  "ricette/fetchRicette",
  async () => {
    try {
      const response = await axios.get(MEMO_URL);
      return response.data.results;
    } catch (err) {
      return err.message;
    }
  }
);

const ricetteSlice = createSlice({
  name: "ricetta",
  initialState,
  reducers: {
    ricettaAdd: {
      reducer(state, action) {
        state.ricette.push(action.payload);
      },
    },
  },
  extraReducers: {
    [fetchRicette.pending]: (state) => {
      state.loading = "load";
    },
    [fetchRicette.fulfilled]: (state, action) => {
      state.loading = "Success";
      state.ricette = action.payload;
    },
    [fetchRicette.fulfilled]: (state, action) => {
      state.loading = "Success";
      state.ricette = action.payload;
    },
    [fetchRicette.rejected]: (state) => {
      state.loading = "Failed";
    },
  },
});

export const selectAllRecepies = (state) => state.ricetta.ricette;
export const getRecepiesLoading = (state) => state.ricetta.loading;
export const getRecepiesError = (state) => state.ricetta.error;

export default ricetteSlice.reducer;
export const { ricettaAdd } = ricetteSlice.actions;
