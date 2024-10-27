import { useState } from "react";
import { Card } from "flowbite-react";
import './profile.styles.scss';

// Import images directly
import defaultImage from "./profile-pic/default.jpg";
import hoverImage from "./profile-pic/hover.jpg";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="profile"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? hoverImage : defaultImage} 
        alt="profile-pic" 
      />
      <h5 className="profile-title">
        Swiss Tangsatjatham
      </h5>
      <p className="profile-description">
        <span className="indent" />Recent aerospace engineering graduate transitioning into software development.<br /><br />
        <span className="indent" />I've developed skills through self-study, bootcamps, and hands-on projects.<br /><br />
        <span className="indent" />Eager to contribute to open-source initiatives and collaborate within the tech community.
      </p>
    </Card>
  );
}

export default ProfileCard;
