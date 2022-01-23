import React from "react"
//adding react typed
import Typed from "react-typed"
//Adding React Social icon (https://jaketrent.github.io/react-social-icons/)
import { SocialIcon } from "react-social-icons";


const Header = () => {
    return (
        
        <div className="header-wrapper" id="home" style={{backgroundImage: "url(/images/Background/header-background.jpeg')"}} >
            <div className="main-info">
                <h1 class="font-effect-fire-animation"><span id="name">Buhari Nasir Maiwada</span> </h1>
                <hr />
                <h1> Computer Engineer | Software Engineer </h1>
                <Typed
                    className="typed-text"
                    strings={["Computer Engineering (Internet Of Things) "," Fullstack Web Developer", "Frontend Web Developer", "Backend Web Developer"]}
                    typeSpeed={70}
                    backSpeed={60}
                    loop
                />
                <a href="#contacts" className="btn-main-offer btn-lg" > contact me</a>
                <span>
                    
                    <SocialIcon url="https://linkedin.com/in/buharimaiwada" network="linkedin" style={{margin: 10, padding: 10, height: 75, width: 75}} target="_blank" />
                    
                    <SocialIcon url="https://github.com/BsoftMaewada" network="github" bgColor="grey" style={{margin: 10, padding: 10, height: 75, width: 75}} target="_blank"/>
                </span>
            </div>
        </div>
    )
}

export default Header