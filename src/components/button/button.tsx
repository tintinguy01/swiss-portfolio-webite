import React, { useState } from "react";

// Import styles
import "./button.styles.scss";

// Import icons
import { CheckCircle } from "react-feather";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  clickedText?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const [buttonText, setButtonText] = useState(children);

  const handleClick = () => {
    setClicked(true);
    setButtonText("Copied!");
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setClicked(false);
      setButtonText(children);
    }, 2000);
  };

  return (
    <button 
      className={`dotted-button ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
      style={{ minWidth: '250px' }}
    >
      {buttonText}
      {clicked && <CheckCircle className="check-icon" size={16} />}
    </button>
  );
};

export default Button;
