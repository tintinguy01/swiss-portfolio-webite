import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import "./hero.styles.scss"; // Ensure you have the styles imported
import rocketImage from "./rocket.png"; // Ensure the image path is correct

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>({});

  // Function to update position based on keys pressed
  const updatePosition = useCallback(() => {
    setPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (pressedKeys["w"]) {
        newY -= 5; // Move up
      }
      if (pressedKeys["s"]) {
        newY += 5; // Move down
      }
      if (pressedKeys["a"]) {
        newX -= 5; // Move left
      }
      if (pressedKeys["d"]) {
        newX += 5; // Move right
      }

      return { x: newX, y: newY };
    });
  }, [pressedKeys]); // Add pressedKeys as a dependency

  // Event listener for keydown and keyup events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKeys((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Continuously update position as long as keys are pressed
  useEffect(() => {
    const interval = setInterval(() => {
      updatePosition();
    }, 20);

    return () => clearInterval(interval);
  }, [updatePosition]); // Update this dependency

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <div className="rocket">
        <img src={rocketImage} alt="rocket" />
      </div>
    </motion.div>
  );
};

export default Hero;
