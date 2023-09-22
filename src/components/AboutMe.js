
import React from "react";
import author from "../images/mySelf/myself.png";

const AboutMe = () => {
    return (
        <div className="container pt-5" id="aboutme">
            <div className="row">
                <div className=" col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className = "profile-img" src={author} alt="author...." />
                    </div>   
                </div>
                <div className=" col-lg-6 col-xm-12">
                    <h1 className="about-heading"> About Me </h1>
                    <section>
                            <p><strong>
                                Dedicated and highly motivated Software Engineer with a strong foundation in computer enginnering, computer science and programming. 
                                Eager to apply my technical skills, problem- solving abilities, and passion for software development to contribute to a dynamic 
                                software engineering team and work on exciting projects.</strong>
                            </p>
                    
                            <p> <strong>Quick to learn and master new technologies, successful working in both
                                team and self-directed settings.</strong>
                            </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
