import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./components/Auth/AuthContext.js";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
