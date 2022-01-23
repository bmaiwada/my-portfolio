import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase, faFile } from "@fortawesome/free-brands-svg-icons";
import { faUserGraduate, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
    return (
        <div className="education" id="education">
            <h1 className="py-5"> Education </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                
                                <h3> Software Engineering</h3>
                                <h5>General Assembly</h5>
                                <br /> <br />
                                <p>Graduated:  2021<br />
                                Certificate in Software Engineering
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faUserGraduate} size="2x" /></div>
                                
                                <h3> Computer Engineering</h3>
                                <h5>Minnesota State University Mankato</h5>
                                <br />
                                <p>
                                    Graduated:  2020 <br />
                                    Bachelor Degree in Computer Engineering
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Education