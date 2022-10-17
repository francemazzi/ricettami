import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import ricetteApi from "../ricetteApi";
import axios from "axios";

const initialState = {
  ricette: [],
  memoUrl: "",
  loading: "load",
  error: "",
};

// To do
//rendere dimanima la varaizione di nameRicetta con nomeRicetta

export const fetchRicette = createAsyncThunk(
  "ricette/fetchRicette",
  async (ric) => {
    const nameRicetta = ric;
    try {
      const response = await ricetteApi.get(
        `complexSearch?apiKey=89534fc4705648859ad31b5faca5c398&query=${nameRicetta}`
      );
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
