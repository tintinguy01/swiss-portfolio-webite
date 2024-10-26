import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./grid.styles.scss";

interface GridProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const Grid: React.FC<GridProps> = ({ image, title, description, link }) => {
  return (
    <motion.div
      whileHover={{
        rotate: "-2.5deg", 
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 400,
        damping: 40,
      }}
      className="grid"
    >
      <img src={image} alt={title} className="grid__image" />
      <h3 className="grid__title">{title}</h3>
      <p className="grid__description">{description}</p>
      <a 
        href={link} 
        className="grid__link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View live project <FiArrowRight />
      </a>
    </motion.div>
  );
};
