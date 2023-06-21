const { createSlice } = require("@reduxjs/toolkit");

export const alertSlice = createSlice({
  name: "alerts",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state: { loading: boolean; }) => {
      state.loading = true;
    },
    hideLoading: (state: { loading: boolean; }) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = alertSlice.actions;
