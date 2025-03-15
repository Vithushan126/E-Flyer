import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import store, { persistor } from "./store/Store.js";
import "./index.css";
import App from "./App.jsx";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "rc-slider/assets/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
