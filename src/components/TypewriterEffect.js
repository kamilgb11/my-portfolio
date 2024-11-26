import React, { useState, useEffect, useRef } from 'react';

function TypewriterEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    indexRef.current = 0;
    setDisplayedText(''); 

    const addNextChar = () => {
      setDisplayedText((prev) => prev + text.charAt(indexRef.current));
      indexRef.current++;

      if (indexRef.current < text.length) {
        frameRef.current = requestAnimationFrame(() => setTimeout(addNextChar, speed));
      }
    };

    addNextChar();

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(frameRef.current);
    };
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default TypewriterEffect;
