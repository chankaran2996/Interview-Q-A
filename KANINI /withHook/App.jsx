// highligting 1st non repting value with hook
import { useState } from "react";
import { useHighlightNonRepeating } from "./useHighlightNonRepeating";

export default function App() {
  const [inputVal, setInputVal] = useState("");

  const highlightedChars = useHighlightNonRepeating(inputVal);

  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <div style={{ marginTop: "20px", fontSize: "24px" }}>
        {highlightedChars.map((item, index) => (
          <span key={index} style={item.style}>
            {item.chr}
          </span>
        ))}
      </div>
    </div>
  );
}
