import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ricette: [],
  loading: false,
  error: "",
};

const MEMO_URL =
  "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=89534fc4705648859ad31b5faca5c398";

// export const fetchRicette = createAsyncThunk("ricette/fetchRicette", () => {
//   return axios
//     .get(
//       "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=89534fc4705648859ad31b5faca5c398"
//     )
//     .then((response) => response.data);
// });

export const fetchRicette = createAsyncThunk(
  "ricette/fetchRicette",
  async () => {
    try {
      const response = await axios.get(MEMO_URL);
      console.log(response.data.results);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchRicette.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRicette.fulfilled, (state, action) => {
        state.loading = false;
        //   state.ricette = action.payload;
        //   state.error = "";
      })
      .addCase(fetchRicette.rejected, (state, action) => {
        state.loading = false;
        state.ricette = [];
        state.error = action.error.message;
      });
  },
});

export const selectAllRecepies = (state) => state.ricetta.ricette;
export const getRecepiesLoading = (state) => state.ricetta.loading;
export const getRecepiesError = (state) => state.ricetta.error;

export default ricetteSlice.reducer;
export const { ricettaAdd } = ricetteSlice.actions;
