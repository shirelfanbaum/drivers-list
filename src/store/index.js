import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import driversListSlice from './driversList-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, driversList: driversListSlice.reducer },
});

export default store;