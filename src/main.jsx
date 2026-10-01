import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import AppContextProvider from "./context/AppContext";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </Provider>
  </StrictMode>
);