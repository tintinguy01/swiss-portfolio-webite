import { useState } from 'react';
import { FaHome, FaUser } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Card } from './card';
import { Dock } from './dock';
import { DockCard } from './dock-card';
import "./navbar.styles.scss";

const icons = [
  { icon: <FaHome size={20} color="#c5e6eb" />, link: "/", text: "Home" },
  { icon: <GrTasks size={15} color="#c5e6eb" />, link: "/case-project", text: "Projects" },
  { icon: <FaUser size={20} color="#c5e6eb" />, link: "/about-me", text: "About" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="navbar">
      <Dock>
        {icons.map(({ icon, link, text }, index) => (
          <Link key={index} to={link} style={{ textDecoration: 'none' }}>
            <DockCard>
              <Card
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="nav-link"
                  style={{
                    fontFamily: '"Orbitron"',
                    fontSize: '0.75rem',
                    transition: '1s ease',
                    textAlign: 'center',
                  }}
                >
                  {hoveredIndex === index ? text : icon}
                </div>
              </Card>
            </DockCard>
          </Link>
        ))}
      </Dock>
    </div>
  );
}

export default Navbar;
