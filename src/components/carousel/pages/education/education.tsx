import "./education.styles.scss";

import universityImage from "./education-pic/university.png";
import schoolImage from "./education-pic/school.jpg";

const Education = () => {
    return (
        <div className="education-page">
            <h1>Education</h1>
            <div className="education-container">
                <div className="academic">
                    <h2>Academic Background</h2>
                    <div className="table-row">
                        <h3>Bachelor degree:</h3>
                        <p>Chulalongkorn University</p>
                        <p>Major:<br /><p></p>Aerospace Engineering</p>
                        <span>2020 - 2024</span>
                        <img src={universityImage} alt="chulalongkorn university" />
                    </div>
                    <div className="table-row">
                        <h3>High school:</h3>
                        <p>Satriwitthaya 2 School</p>
                        <p>Major:<br />Math-Science</p>
                        <span>2017 - 2020</span>
                        <img src={schoolImage} alt="satriwitthaya 2 school" />
                    </div>
                </div>
                <div className="others">
                    <h2>Online Courses</h2>
                    <div className="courses">
                        <p>2024 Web Development Bootcamp by Dr. Angela Yu</p>
                        <p>Career Essentials in Software Development by Microsoft and LinkedIn</p>
                        <p>Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
