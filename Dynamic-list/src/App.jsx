import React from "react";

function App() {
  // Hardcoded items
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Favorite Technologies</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // key to avoid React warning
        ))}
      </ul>
    </div>
  );
}

export default App;
