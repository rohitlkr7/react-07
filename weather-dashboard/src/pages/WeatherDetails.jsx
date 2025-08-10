import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key
  const GOOGLE_MAPS_KEY = "YOUR_GOOGLE_MAPS_EMBED_KEY"; // Optional

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [city, API_KEY]);

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;
  if (!weather || weather.cod !== 200)
    return <p style={{ padding: "20px" }}>City not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>

      {/* Bonus: Google Map Embed */}
      {GOOGLE_MAPS_KEY && (
        <iframe
          title="map"
          width="100%"
          height="300"
          style={{ marginTop: "20px", border: "none" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=${weather.name}`}
        ></iframe>
      )}
    </div>
  );
}

export default WeatherDetails;
