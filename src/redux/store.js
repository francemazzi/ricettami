import { configureStore } from "@reduxjs/toolkit";
import ricetteReducer from "./features/ricetteLoad";

const store = configureStore({
  reducer: {
    ricetta: ricetteReducer,
  },
});
export default store;
