import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface ApiData {
  message: string;
  time: string;
  randomNumber: number;
}

function App() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://express-demo-2.onrender.com/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Request failed:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Frontend Client 🔵</h1>

      {loading && <p>Loading...</p>}

      {!loading && data && (
        <div>
          <h2>Received JSON:</h2>
          <pre
            style={{
              background: "#222",
              padding: "15px",
              borderRadius: "10px",
              color: "lime",
              fontSize: "1rem",
            }}
          >
        {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;