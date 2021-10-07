import { createSlice } from "@reduxjs/toolkit";

const driversListSlice = createSlice({
  name: "driversList",
  initialState: {
    items: [],
    length: 0,
    filteredDrivers: [],
    search: false,
  },
  reducers: {
    replaceDriversList(state, action) {
      state.length = action.payload.length;
      state.items = action.payload.items;
    },
    filterDrivers(state, action) {
      state.search = true;
      const driverFilteredList = state.items.filter((driver) => {
        const driverName = driver.name.toLowerCase();
        return driverName.includes(action.payload);
      });
      state.filteredDrivers = driverFilteredList;
    },
  },
});

export const driversListActions = driversListSlice.actions;

export default driversListSlice;
