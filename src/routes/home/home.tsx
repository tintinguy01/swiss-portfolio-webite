import React, { useEffect, useMemo, useState } from "react";

// Import styles
import "./home.styles.scss";

// Import components
import Button from "../../components/button/button";
import Hero from "../../components/hero/hero";
import IconButton from "../../components/icon-button/button";

// Import icons
import { GitHub, Linkedin, FileText } from "react-feather";

const Home = () => {
  const words = useMemo(() => [
    "Recent Aerospace Engineering Graduate",
    "Self-Taught Software Developer",
  ], []);

  const [displayedText, setDisplayedText] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText((prev) => words[currentWordIndex].substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < words[currentWordIndex].length) {
          setDisplayedText((prev) => words[currentWordIndex].substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 3000);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const star = () => {
      const count = 50;
      const scene = document.querySelector('.hero-container');

      if (!scene) return;

      for (let i = 0; i < count; i++) {
        const starElement = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const duration = Math.random() * 1;
        const h = Math.random() * 100;

        starElement.style.left = `${x}px`;
        starElement.style.width = '1px';
        starElement.style.height = `${h}px`;
        starElement.style.animationDuration = `${duration}s`;

        scene.appendChild(starElement);
      }
    };

    star();
  }, []);

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("tintinguy01@gmail.com").then(() => {
      console.log("Email copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="intro">
          <h3>
            {"Hello, I'm Swiss Tangsatjatham".split("").map((child, idx) => (
              <span
                className="hoverText"
                key={idx}
                style={child === " " ? { marginRight: "0.5px" } : {}}
              >
                {child === " " ? "\u00A0" : child}
              </span>
            ))}
          </h3>
          <div className="h1-container">
            <h1>
              I’m a<span> {displayedText}</span>
              <span 
                className="cursor" 
                style={{ opacity: isDeleting || charIndex < words[currentWordIndex].length ? 1 : 0 }} 
              />
            </h1>
          </div>
          <p>
            I'm actively seeking new opportunities as a full-stack software engineer. 
            Feel free to get in touch—I'm excited to connect and contribute to meaningful projects!
          </p>
          <Button 
            onClick={copyEmailToClipboard} 
            clickedText="Copied!"
          >
            tintinguy01@gmail.com
          </Button>
        </div>
      </div>
      <div className="hero-container">
        <Hero />
        <p>Press W, A, S, D to move the rocket.</p>
      </div>
      <div className="icon-button-container">
        <IconButton 
          text="Github"
          onClick={() => openLink("https://github.com/tintinguy01")}>
          <GitHub size={20} />
        </IconButton>
        <IconButton 
          text="Linkedin" 
          className="linkedin-button"
          onClick={() => openLink("https://www.linkedin.com/in/swiss-tangsatjatham-7821b3254/")}>
          <Linkedin size={20} />
        </IconButton>
        <IconButton 
          text="Resume" 
          className="resume-button"
          onClick={() => {
            const link = document.createElement('a');
            link.href = "/files/Swiss-Resume.pdf";
            link.download = "swiss-resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
          <FileText size={20} />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
