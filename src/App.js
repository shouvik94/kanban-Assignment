import React from "react";
import './App.css';
import Board from "./Components/Board";

function App() {
  

  return (
    
    <div className="App">
   

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
