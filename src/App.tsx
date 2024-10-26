import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

// Import styles and components
import './App.css';
import Navbar from './routes/navbar/navbar';
import Home from './routes/home/home';
import { Project } from './routes/project/project';
import About from './routes/about/about';

const pages = [Home, Project, About];

const App = () => {
  const location = useLocation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/case-project":
        setIndex(1);
        break;
      case "/about-me":
        setIndex(2);
        break;
      default:
        setIndex(0);
    }
  }, [location.pathname]);

  const transitions = useTransition(location.pathname, {
    keys: location.pathname,
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    config: {
      duration: 800,
      easing: (t: number) => t * (2 - t),
    },
  });

  return (
    <div className="app-content" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Navbar />
      {transitions((style, item) => {
        const Page = pages[index];
        return (
          <animated.div
            style={{
              ...style,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            <Page />
          </animated.div>
        );
      })}
    </div>
  );
};

export default App;
