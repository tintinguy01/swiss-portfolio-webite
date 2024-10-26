import React from "react";
import { motion } from "framer-motion";
import { Grid } from "../../components/grid/grid";

// Import images
import taskflowImage from "./project-image/taskflow.png";
import movierevImage from "./project-image/movierev.png";
import fishmeImage from "./project-image/fishme.png";
import simonImage from "./project-image/simon.png";
import drumkitImage from "./project-image/drumkit.png";
import roboImage from "./project-image/robo.png";

// Import projects
import projects from './projects.json';

// Import styles
import "./project.styles.scss";

// Create a mapping of image names to imported images
const imageMap: { [key: string]: string } = {
  "taskflow.png": taskflowImage,
  "movierev.png": movierevImage,
  "fishme.png": fishmeImage,
  "simon.png": simonImage,
  "drumkit.png": drumkitImage,
  "robo.png": roboImage,
};

const projectData = projects.map((project) => ({
  ...project,
  image: imageMap[project.image],
}));

export const Project = () => {
  return (
    <div className="project-container">
      <h1> 
        Case studies and Projects
      </h1>
      <div className="project">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.1,
          }}
          className="project__grid"
        >
          {projectData.map((project, index) => (
            <Grid
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
