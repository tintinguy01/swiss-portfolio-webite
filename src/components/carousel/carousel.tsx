import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// Import styles
import "./carousel.styles.scss";

// Import carousel pages
import Education from "./pages/education/education";
import Story from "./pages/story/story";
import Skill from "./pages/skills/skill";

const pages = [
  <Education key={1} />,
  <Story key={2} />,
  <Skill key={3} />,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const CarouselProfile: React.FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0 && !isHovered) {
        setPageIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, isHovered]);

  const onDragEnd = () => {
    const x = dragX.get();

    // Check drag threshold to change pages
    if (x <= -DRAG_BUFFER && pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${pageIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carousel-pages"
      >
        <CarouselPages pageIndex={pageIndex} />
      </motion.div>

      <Dots pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
};

const CarouselPages: React.FC<{ pageIndex: number }> = ({ pageIndex }) => {
  return (
    <>
      {pages.map((PageComponent, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: pageIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="carousel-page"
        >
          {PageComponent}
        </motion.div>
      ))}
    </>
  );
};

const Dots: React.FC<{ pageIndex: number; setPageIndex: React.Dispatch<React.SetStateAction<number>> }> = ({ pageIndex, setPageIndex }) => {
  return (
    <div className="dots-container">
      {pages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setPageIndex(idx)}
          className={`dot ${idx === pageIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default CarouselProfile;
