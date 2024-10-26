import { useRef, useState } from "react";
import "./button.styles.scss";

interface IconButtonProps {
  children: React.ReactNode;
  text: string;
  color?: string;
  [key: string]: any;
}

const IconButton = ({ children, text, className, ...props }: IconButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  console.log("Hovered:", hovered);
  console.log("Offset Width:", ref.current?.offsetWidth);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`icon-button ${className}`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="icon-button__text-container"
      >
        <span ref={ref} className="icon-button__text">
          {text}
        </span>
      </div>
    </button>
  );
};


export default IconButton;
