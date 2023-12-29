import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App.tsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
