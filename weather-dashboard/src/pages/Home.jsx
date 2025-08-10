import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
