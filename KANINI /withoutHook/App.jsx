// Highlight the vaules which is 1st non repeting value 
import { useState } from "react";

export default function App() {
  const [inputVal, setInputVal] = useState("");

  const getFirstNonRepeatingChar = (str) => {
    const freq = {};

    // Count frequency
    for (let ch of str) {
      freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find first non-repeating
    for (let ch of str) {
      if (freq[ch] === 1) return ch;
    }
    return null;
  };

  const firstUnique = getFirstNonRepeatingChar(inputVal);

  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <div style={{ marginTop: "20px", fontSize: "24px" }}>
        {inputVal.split("").map((chr, index) => (
          <span
            key={index}
            style={{
              color: chr === firstUnique ? "red" : "black",
              fontWeight: chr === firstUnique ? "bold" : "normal",
            }}
          >
            {chr}
          </span>
        ))}
      </div>
    </div>
  );
}
