import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PageMaintenance from "./pages/PageMaintenance.tsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <BrowserRouter>
            <PageMaintenance>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </PageMaintenance>
        </BrowserRouter>
    </GoogleOAuthProvider>
);
