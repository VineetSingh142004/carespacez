import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <App />
  </GoogleOAuthProvider>
);
