import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ricette: [],
  nomeRicetta: "",
  loading: "load",
  error: "",
};

const nameRicetta = "pizza";

const MEMO_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${nameRicetta}&apiKey=89534fc4705648859ad31b5faca5c398`;

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
    filterRicette: (state, action) => {
      state.nomeRicetta = action.payload;

      console.log(action.payload);

      // state.ricette = state.ricette.filter((ricetta) =>
      //   ricetta.title.toLowerCase().includes(action.payload)
      // );
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
export const { ricettaAdd, filterRicette } = ricetteSlice.actions;
