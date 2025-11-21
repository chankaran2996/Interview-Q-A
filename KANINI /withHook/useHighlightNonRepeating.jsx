import { useMemo } from "react";

export function useHighlightNonRepeating(text) {
  return useMemo(() => {
    if (!text) return [];

    const freq = {};

    for (let ch of text) {
      freq[ch] = (freq[ch] || 0) + 1;
    }

    const firstUnique = [...text].find(ch => freq[ch] === 1);

    return text.split("").map((ch) => {
      if (ch === firstUnique) {
        return {
          chr: ch,
          style: { color: "red", fontWeight: "bold" }
        };
      }
      return {
        chr: ch,
        style: { color: "black", fontWeight: "normal" }
      };
    });
  }, [text]);
}
