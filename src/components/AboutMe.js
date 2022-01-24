
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
                            A bachelor degree graduate in computer engineering and a certified
                            software engineer. Experienced with microcontrollers (STM32,
                            Arduino, Raspberry Pi), javaScript, C, python programming,
                            Assembly language, VHDL, Verilog, software/hardware developing,
                            testing, and debugging code; designing interfaces, operating
                            systems, embedded systems, hardware, software engineering, and
                            administering systems networks and IoT (Internet of Things).</strong>
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
