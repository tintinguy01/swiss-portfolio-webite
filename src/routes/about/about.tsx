
// Import components
import ProfileCard from "../../components/card/profile";
import CarouselProfile from "../../components/carousel/carousel";

// Import styles
import "./about.styles.scss";

const About = () => {
    return (
        <div className="about-page">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="profile-card">
                    <ProfileCard />
                </div>
                <CarouselProfile />
            </div>
        </div>
    );
}

export default About;