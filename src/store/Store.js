import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

import flightDetailsSlice from "../redux/feature/flightDetailsSlice";

// Persist configuration
const persistConfig = {
  key: "root", // The key for the persisted data in storage
  storage, // Storage engine (e.g., localStorage)
  blacklist: ["flightDetails"],
  // whitelist: ['customer'], // Only persist the customer slice
};

// Combine all reducers
const rootReducer = combineReducers({
  flightDetails: flightDetailsSlice, // Persisted slice due to whitelist
});

// Apply persist reducer to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables serializable checks to support non-serializable data like file uploads
    }),
});

// Create the persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
export default store;
