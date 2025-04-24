import React, { useState } from "react";
import "./App.css";

function Midterm() {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center"}}>
        <p>당신은 어떤 과일을 좋아하시나요?</p>
        <strong>{selectedFruit && ` ${selectedFruit}`}</strong>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleFruitClick("사과")}>사과</button>
        <button onClick={() => handleFruitClick("오렌지")}>오렌지</button>
        <button onClick={() => handleFruitClick("바나나")}>바나나</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Midterm</h1>
      <Midterm />
    </div>
  );
}

export default App;
