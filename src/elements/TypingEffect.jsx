import React, { useState, useEffect } from "react";
import "./TypingEffect.css"; // For blinking cursor

const TypingEffect = () => {
  const texts = [
    "do Data Structures & Algorithms.",
    "am a Full Stack Developer.",
    "am a Competitive Programmer.",
    "am a Photo Editor.",
  ];

  const [subIndex, setSubIndex] = useState(0); // Tracks the length of typed characters
  const [index, setIndex] = useState(0); // Tracks which text is being typed
  const [deleting, setDeleting] = useState(false); // Flag to switch between typing and deleting
  const [blink, setBlink] = useState(true); // For the blinking cursor
  const [speed, setSpeed] = useState(150); // Typing speed

  useEffect(() => {
    // Blinking cursor effect
    const cursorBlink = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink); // Cleanup the blinking effect
  }, []);

  useEffect(() => {
    // Handle typing and deleting
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // Pause before deleting
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1)); // Add or remove characters
      setSpeed(deleting ? 100 : 100); // Change speed when deleting
    }, speed);

    return () => clearTimeout(timeout); // Clean up previous timeout
  }, [subIndex, index, deleting, speed, texts]);

  return (
    <div className="text-3xl flex flex-wrap items-center relative overflow-hidden">
      {/* Static "I do" + Dynamic typing area in a single line */}
      <p className="flex flex-wrap items-end">
        <span className="text-4xl mr-2"> I </span>
        <span className="text-blue-500 typing-area ">
          {texts[index].substring(0, subIndex)}
          <span className={`cursor ${blink ? "blink" : ""}`}>|</span>{" "}
          {/* Blinking cursor */}
        </span>
      </p>
    </div>
  );
};

export default TypingEffect;
// &nbsp;{/* Add non-breaking space after "I do" */}
