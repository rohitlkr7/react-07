import React, { useEffect, useState } from "react";

export default function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch on mount

    // Auto-refresh every 30s
    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={styles.container}>
      <h1>Daily Quote Generator</h1>
      {loading ? (
        <div style={styles.spinner}>⏳ Loading...</div>
      ) : (
        <div style={{ ...styles.quoteBox, opacity: loading ? 0.5 : 1 }}>
          <p style={styles.content}>"{quote?.content}"</p>
          <p style={styles.author}>- {quote?.author}</p>
        </div>
      )}
      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  quoteBox: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    background: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    transition: "opacity 0.5s ease-in-out",
  },
  content: {
    fontSize: "1.5rem",
    fontStyle: "italic",
  },
  author: {
    fontSize: "1.2rem",
    marginTop: "10px",
    fontWeight: "bold",
  },
  spinner: {
    fontSize: "1.2rem",
    color: "#555",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
