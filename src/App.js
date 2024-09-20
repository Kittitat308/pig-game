import React, { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState(0);
  const [pigSize, setPigSize] = useState(100);
  const [pigImage, setPigImage] = useState("pig_normal.jpg");

  const feedPig = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);

    setPigSize(pigSize + foodValue * 2);

    if (newLevel >= 100) {
      setPigImage("pig_special.jpg");
    }
  };

  return (
    <div className="App">
      <h1>Level: {level}</h1>
      <div className="pig-container">
        <div
          className="pig-image"
          style={{
            width: pigSize + "px",
            height: pigSize + "px",
            backgroundImage: `url(${pigImage})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="food-options">
        <button onClick={() => feedPig(5)}>แตงโม</button>
        <button onClick={() => feedPig(10)}>ฟักทอง</button>
        <button onClick={() => feedPig(20)}>หญ้า</button>
      </div>
    </div>
  );
}

export default App;
