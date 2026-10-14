
import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      const result = Function('"use strict"; return (' + display + ')')();
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("");
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="text"
        value={display}
        readOnly
        placeholder="0"
      />

      <div className="buttons">
        {["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? calculate() : handleClick(item)
            }
          >
            {item}
          </button>
        ))}

        <button className="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
