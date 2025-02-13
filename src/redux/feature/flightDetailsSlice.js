import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../../src/services/api/Api";

//Get Availaible Flight Detail
export const GetFlightAvailablity = createAsyncThunk(
  "GetFlightAvailablity",
  async ({ dep_date, des_date, dep_apt, des_apt }, { rejectWithValue }) => {
    console.log(dep_date);

    try {
      const response = await API.GetFlightAvailablity(
        dep_date,
        des_date,
        dep_apt,
        des_apt
      );
      console.log(response);

      // return response.data;
      return {
        flights: response.data,
        searchParams: { dep_date, des_date },
      };
    } catch (error) {
      console.error("Error fetching user details:", error);
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const initialState = {
  flights: [],
  dep_date: null,
  des_date: null,
  loading: false,
  error: null,
};

const flightDetailsSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(GetFlightAvailablity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetFlightAvailablity.fulfilled, (state, action) => {
        state.loading = false;
        // state.flights = action.payload;
        state.flights = action.payload.flights;
        state.dep_date = action.payload.searchParams.dep_date;
        state.des_date = action.payload.searchParams.des_date;
      })
      .addCase(GetFlightAvailablity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const {} = flightDetailsSlice.actions;

export default flightDetailsSlice.reducer;
