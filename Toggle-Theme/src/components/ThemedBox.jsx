import React from "react";

export default function ThemedBox({ theme, text }) {
  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #ccc",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      border: "1px solid #555",
    },
  };

  return (
    <div
      style={{
        ...styles[theme],
        padding: "20px",
        borderRadius: "8px",
        flex: 1,
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      {text}
    </div>
  );
}
