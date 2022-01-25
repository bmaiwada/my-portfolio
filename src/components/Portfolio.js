import React from "react"

/*******image source ********/
import MyPortfolio from "../images/Portfolio.png";
import HiTMe from "../images/HiT-Me.png";
import AssetsTracker from "../images/AssetsTracker.jpg";
import DevBook from "../images/DevBook.png";
import MERN from "../images/MERN.png";
import FinchCollector from "../images/FinchCollector.png";
import Wayfarer from "../images/Wayfarer.png";
import CarDealership from "../images/CarDealership.png";

/********* FONTAWESOME **********/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css";

//REACT VIDEO
import ReactPlayer from "react-player";

const Portfolio = () => {

   // MY PORTFOLIO
    const openPopupboxMyPortfolio = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={MyPortfolio} alt="Portfolio Project..." />
                <p>I approach each project individually and always focus on the results. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/BsoftMaewada/portifolio/tree/main/my_portifolio")} > https://github.com/BsoftMaewada/portifolio/tree/main/my_portifolio </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "Portfolio Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }


    // CAR DEALERSHIP
    const openPopupboxCarDealership = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={CarDealership} alt="CarDealership Project..." />
                <p>I approach each project individually and always focus on the results. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/BsoftMaewada/car-dealership")} > https://github.com/BsoftMaewada/car-dealership </a>
            </>
        )
        PopupboxManager.open({ 
                    content,
                    config: {
                        titleBar: {
                            enable: true,
                            text: "Car Dealership Project",
                        },
                        fadeIn: true,
                        fadeInSpeed: 500,
                    },
                });
    }

// HiT-Me
    const openPopupboxHiTMe = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={HiTMe} alt="HiT-Me Project..." />
                <p>A website game designed using HTML, CSS and JavaScript. A player will try to hit the box where a popup venom before the time runs out. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/BsoftMaewada/HiT-Me")} >https://github.com/BsoftMaewada/HiT-Me </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "HiT-Me Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }


//Assets Tracker
    const openPopupboxAssetsTracker = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={AssetsTracker} alt="Assets Tracker Project..." />
                <p>I approach each project individually and always focus on the results. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/Dthomas0729/Asset-Tracker")} >https://github.com/Dthomas0729/Asset-Tracker </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "Assets Tracker Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    
    }


//DEVBOOK
    const openPopupboxDevBook = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={ DevBook } alt="DevBook Project..." />
                <p>DevBook is a new social media platform where Software Developers can share their code,<br />
                    ask for help, share ideas, discuss events and make valuable connections. The goal of <br />
                    DevBook is to provide a platform which will aid the advancement of the world. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/vincelaq/dev-social-media")} >https://github.com/vincelaq/dev-social-media </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "DevBook Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }


//MERN FULLSTACK
    const openPopupboxMERN = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={ MERN } alt="MERN Project..." />
                <p>A minimal full-stack login/authorization app using the MERN stack (MongoDB for our database,<br />
                    Express and Node for our backend, and React for our frontend) </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/BsoftMaewada/mern_auth")} >https://github.com/BsoftMaewada/mern_auth </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "MERN Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }


//FinchCollector
    const openPopupboxFinchCollector = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={ FinchCollector } alt="Finch Collector Project..." />
                <p>I approach each project individually and always focus on the results. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/BsoftMaewada/finchCollector")} >https://github.com/BsoftMaewada/finchCollector </a>
            </>
        )
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "Finch Collector Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }


//WAYFARER PROJECT 
    const openPopupboxWayfarer = () => {
        const content = (
            <>
                <img className= "portfolio-image-popupbox" src={ Wayfarer } alt="Wayfarer Project..." />
                <p>A Travel website application that focuses on cities around the world and city art <br />
                    that can be found there. Users can share their images and experiences with each other. </p>
                <b> GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/michaelbryanstark/Project-Wayfarer")} >https://github.com/michaelbryanstark/Project-Wayfarer </a>
            </>
        )
       
        PopupboxManager.open({ 
            content,
                config: {         
                    titleBar: {
                                enable: true,
                                text: "Wayfarer Project",
                            },
                            fadeIn: true,
                            fadeInSpeed: 500,
                        },
                });
    }

    
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-4">Projects</h1>
                <p className="para">
                    I approach each project individually and always focus on the results.<br />
                    Click on individual icon to view the github link and description.
                </p>

                <h3 className="soft"> Software Engineering Projects</h3>
                <div className="image-box-wrapper row row-cols-1 row-cols-sm-2 row-cols-md-4  justify-content-center">

                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxMyPortfolio} >
                        <img className="portfolio-image" src={ MyPortfolio } alt=" MyPortfolio Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCarDealership} >
                        <img className="portfolio-image" src={ CarDealership } alt=" CarDealership Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxHiTMe }>
                        <img className="portfolio-image" src={HiTMe} alt=" HiT-Me Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxAssetsTracker }>
                        <img className="portfolio-image" src={ AssetsTracker } alt=" Assets Tracker Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxDevBook }>
                        <img className="portfolio-image" src={DevBook} alt=" DevBook Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxMERN }>
                        <img className="portfolio-image" src={ MERN } alt=" MERN Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxFinchCollector }>
                        <img className="portfolio-image" src={ FinchCollector } alt=" FinchCollector Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={ openPopupboxWayfarer }>
                        <img className="portfolio-image" src={ Wayfarer } alt=" Wayfarer Project " />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    
                </div>
                <h3 className="comp"> Computer Engineering Projects</h3>
                
                <div className="video" >
                    <h4> Wireless Line Tracking Vehicle </h4>
                    <div className='player-wrapper'>
                        
                            <ReactPlayer
                                className='react-player'
                                url={[
                                    'Videos/Tracking-Vehicle.MP4',
                                ]}
                                playing
                                width='100%'
                                height='100%'
                                controls='false'
                                title="Bluetooth"
                            />
                    </div>
                    <br />
                    <h4> Bluetooth Temperature and Humidimperature and Humdity Sensor </h4>
                    <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={[
                                    'Videos/Bluetooth-Sensor.MP4',
                                ]}
                                playing
                                width='100%'
                                height='100%'
                                controls='false'
                            />
                    </div>
                </div>
            <PopupboxContainer />
            </div>
        </div>
    )
}
export default Portfolio;