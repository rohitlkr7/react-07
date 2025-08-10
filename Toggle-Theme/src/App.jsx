import React, { useState, useEffect } from "react";
import ThemedBox from "./components/ThemedBox";

export default function ThemeApp() {
  // Load initial theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease"
      }}
    >
      <h1>Theme Toggle App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div style={{ display: "flex", gap: "10px" }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
}
