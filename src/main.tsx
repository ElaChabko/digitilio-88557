import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
// Poppins hostowany lokalnie (bez zapytań do Google Fonts – szybciej i zgodnie z RODO)
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-ext-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-ext-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-ext-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-ext-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-ext-700.css";
import "@fontsource/poppins/latin-800.css";
import "@fontsource/poppins/latin-ext-800.css";
import "@fontsource/poppins/latin-400-italic.css";
import "@fontsource/poppins/latin-ext-400-italic.css";
import "./index.css";

const container = document.getElementById("root")!;

// Strony są prerenderowane przy buildzie – jeśli HTML już jest, React go „ożywia”.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
