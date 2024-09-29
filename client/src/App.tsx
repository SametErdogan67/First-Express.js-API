import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Pet {
  name: string;
  type: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [pets, setPets] = useState<Pet[]>([]); // Pets için tür tanımlandı

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setPets(response.data.pets);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="main-container">
      <h1>My First Express.js API </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <ul>
          {pets.map((pet, index) => (
            <li key={index}>
              {pet.name} ({pet.type})
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
