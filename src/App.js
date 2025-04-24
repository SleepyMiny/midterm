import React, { useState } from "react";
import "./App.css";

function Midterm() {
  const [selectedFruit, setSelectedFruit] = useState("");      // 선택된 과일 상태를 저장하는 state 훅


  // 과일 버튼 클릭 시 호출되는 함수
  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);          // 클릭된 과일 이름을 state에 저장함
  };

  return ( 
    <div>
      <div style={{ display: "flex", alignItems: "center"}}>  {/* 과일이 질문 오른쪽으로 오는 스타일 */}
        <p>당신은 어떤 과일을 좋아하시나요?</p>
        <strong>{selectedFruit && ` ${selectedFruit}`}</strong>
      </div>

      <div>
        <button onClick={() => handleFruitClick("사과")}>사과</button>
        <button onClick={() => handleFruitClick("오렌지")}>오렌지</button>
        <button onClick={() => handleFruitClick("바나나")}>바나나</button>
      </div>
    </div>
  );
}

// 컴포넌트가 화면에 렌더링되는 부분
function App() {
  return (
    <div>
      <h1>Midterm</h1>
      <Midterm />
    </div>
  );
}

export default App;
