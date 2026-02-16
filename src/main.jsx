import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import "./index.css";

// Slick Carousel CSS (only import once)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create theme with your custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#0ea5e9", // Primary-600 from your tailwind config
      light: "#38bdf8", // Primary-400
      dark: "#0284c7", // Primary-700
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef", // Secondary-500
      light: "#e879f9", // Secondary-400
      dark: "#c026d3", // Secondary-600
      contrastText: "#ffffff",
    },
    error: {
      main: "#ef4444",
    },
    warning: {
      main: "#f97316", // Accent-500
    },
    info: {
      main: "#3b82f6",
    },
    success: {
      main: "#10b981",
    },
    background: {
      default: "#fafafa", // Neutral-50
      paper: "#ffffff",
    },
    text: {
      primary: "#171717", // Neutral-900
      secondary: "#404040", // Neutral-700
      disabled: "#a3a3a3", // Neutral-400
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Montserrat',
      'Poppins',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
    },
    h4: {
      fontFamily: 'Cormorant Garamond, serif',
    },
    h5: {
      fontFamily: 'Cormorant Garamond, serif',
    },
    h6: {
      fontFamily: 'Cormorant Garamond, serif',
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      textTransform: 'none', // Prevents all-caps buttons
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          padding: '0.5rem 1.5rem',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});

// Performance monitoring (optional)
const reportWebVitals = (metric) => {
  // You can send to analytics service here
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
};

// Create root once
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render app
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance
// reportWebVitals(console.log);

// Enable hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept();
} 