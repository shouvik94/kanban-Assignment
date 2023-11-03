import React, { useEffect, useState } from "react";
import './App.css';
import Board from "./Components/Board";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
    <div className="App">
      {/* <div>
      <h1>Data from API:</h1>
      <ul>
      {data.tickets.map((ticket) => (
          <li key={ticket["id"]}>{ticket["title"]}</li>
        ))}
      </ul>
      </div>
      <div className="app_navbar">
        <h2>Kanban Board</h2>
      </div> */}

      <div className="app_outer">
        <div className="app_boards">
          <Board 
          
          />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
