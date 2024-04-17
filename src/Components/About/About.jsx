import React from "react";
import './About.css';


const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src='/photo.jpg'/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img />

                </div>
                <div className="about-right">
                    <div className="about-para" >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim voluptatum possimus repellendus magni eveniet optio, tenetur quo corrupti quasi provident pariatur accusantium voluptates, aut veniam id reiciendis reprehenderit quibusdam.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nisi possimus rem optio beatae repudiandae laborum culpa, itaque voluptas quae ratione laboriosam ullam doloremque accusamus excepturi fuga molestiae, voluptatum molestias!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                          <p>HTML & CSS</p><hr style={{width:"80%"}}/>  
                        </div>
                        <div className="about-skill">
                          <p>React js</p><hr style={{width:"50%"}}/>  
                        </div>
                        <div className="about-skill">
                          <p>JavaScript</p><hr style={{width:"60%"}}/>  
                        </div>
                        <div className="about-skill">
                          <p>MATLAB</p><hr style={{width:"80%"}}/>  
                        </div>
                    </div>
                </div>
                <div  className="about-achievements">
                  <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                  <hr/>
                  <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                  <hr/>
                  <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                </div>
            </div>
        </div>

    
  )
}
export default About