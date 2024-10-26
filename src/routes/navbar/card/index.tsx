import * as React from 'react';

// Import styles
import './card.styles.scss';

interface CardProps {
  src?: string;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Card: React.FC<CardProps> = ({ src, children, onMouseEnter, onMouseLeave }) => (
  <span 
    className="card" 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {src && <img className="card__blur" src={src} alt="" />}
    {src && <img className="card__img" src={src} alt="" />}
    <div className="icon-container">
      {children}
    </div>
  </span>
);
