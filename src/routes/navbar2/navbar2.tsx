import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'; 

import { motion } from "framer-motion";

// Import styles
import "./navbar2.styles.scss";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  to: string;
}

interface CursorProps {
  position: Position;
}

export const Navbar2 = () => {
  return (
    <div className="navbar-container">
      <SlideTabs />
    </div>
  );
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="slide-tabs"
    >
      <Tab setPosition={setPosition} to="/">Home</Tab>
      <Tab setPosition={setPosition} to="/case-project">Projects</Tab>
      <Tab setPosition={setPosition} to="/about-me">About</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab: React.FC<TabProps> = ({ children, setPosition, to }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="tab"
    >
      <Link to={to}>  {/* Wrap the tab content inside Link */}
        {children}
      </Link>
    </li>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="cursor"
    />
  );
};
