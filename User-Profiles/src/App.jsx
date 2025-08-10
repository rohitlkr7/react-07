import React, { useEffect, useState } from "react";

// UserCard Component
function UserCard({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading users...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <div style={styles.grid}>
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  input: {
    padding: "8px",
    margin: "10px 0",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
};
