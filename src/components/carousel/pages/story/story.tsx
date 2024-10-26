// Import styles
import "./story.styles.scss";

const Story = () => {
    return ( 
        <div className="story-page">
            <h1 className="story-title">
                <span role="img" aria-label="rocket">🚀</span> From Aerospace to Code: My Journey into Tech
            </h1>

            <div className="story-container">
                <p>
                My journey into software started with an early dream of studying <strong>computer engineering</strong> 
                <span role="img" aria-label="graduation-cap"> 🎓</span>, though I ended up in aerospace due to academic placements. 
                While I appreciated the field, I knew early on it wasn’t my true passion.
                </p>
                <p>
                In my second year, I started <strong>teaching myself to code</strong> 
                <span role="img" aria-label="laptop"> 💻</span>, captivated by the creative potential in web development.
                Balancing studies in aerospace and learning to code was challenging, especially with projects and exams,
                but it kept my motivation alive.
                </p>
                <p>
                After graduation, I committed fully to coding, diving deep into web development and finding fulfillment in 
                <strong> building and designing applications</strong> 
                <span role="img" aria-label="palette"> 🎨</span>. It’s been a rewarding pivot, driven by curiosity and a desire to create.
                </p>
            </div>
        </div>
     );
}
 
export default Story;