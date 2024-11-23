import React, { useState, useEffect } from 'react';

function TypingEffect() {
  const texts = ["Happy Journey Mansi", "Go chase your dreams!"]; // Updated sentences
  const highlightWords = ["Mansi", "dreams!"]; // Words to highlight in yellow
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Track which sentence is being typed

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < texts[textIndex].length) {
        setDisplayedText((prev) => prev + texts[textIndex][index]);
        setIndex((prev) => prev + 1);
      } else {
        // After a sentence is fully typed, pause and switch to the next one
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop to the first sentence after the last
        }, 1000); // 1-second pause before switching sentences
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index, texts, textIndex]);

  // Split the text by highlight words and render with yellow color for those words
  const formattedText = displayedText.split(new RegExp(`(${highlightWords.join("|")})`, "gi")).map((part, idx) => (
    <span
      key={idx}
      style={{ color: highlightWords.includes(part) ? "#5c00e6" : "inherit" }}
    >
      {part}
    </span>
  ));

  return (
    <div className="font-extrabold text-3xl">
      {formattedText}
    </div>
  );
}

export default TypingEffect;
