import React from "react";

//React Share-Button 
import {
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon,
} from "react-share";

//React scroll
import { Link} from "react-scroll"

const Footer = () => {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="d-flex">
                <p> Location: Washington-Baltimore </p>
              </div>
              <div className="d-flex">
                <a href="tel:+1507-340-1706"> Tel: +1 (507) 340-1706</a>
              </div>
              <div className="d-flex">
                <p> Email: maewada@live.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
              <div className="row">
                <div className="col">
                  <Link smooth={true} to="home" offset={-110} className="footer-nav">
                    Home
                  </Link>
                  <br />
                  <Link smooth={true} to="aboutme"  offset={-110} className="footer-nav">
                    About Me
                  </Link>
                  <br />
                  <Link smooth={true} to="skill"  offset={-110} className="footer-nav">
                    Skills
                  </Link>
                </div>
                <div className="col">
                  <Link smooth={true} to="experience"  offset={-110} className="footer-nav">
                    Experience
                  </Link>
                  <br />
                  <Link smooth={true} to="portfolio"  offset={-110} className="footer-nav">
                    Projects
                  </Link>
                  <br />
                  <Link smooth={true} to="education"  offset={-110} className="footer-nav">
                    Education
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
              <div className="d-flex justify-content-center">
                {/* - */}
                <LinkedinShareButton
                  url={"https://twitter.com/Bsoft_Maewada"}
                  quote={"FullStack Developer"}
                  hashtag="#javascript, #python #C"
                >
                  <LinkedinIcon className="mx-3" size={36} />
                </LinkedinShareButton>
                {/* - */}
                <WhatsappShareButton
                  url={"https://web.whatsapp.com/"}
                  quote={"FullStack Developer"}
                >
                  <WhatsappIcon className="mx-3" size={36} />
                </WhatsappShareButton>
                {/* - */}
                <RedditShareButton
                  url={"https://www.reddit.com/user/BsoftMaewada"}
                  quote={"FullStack Developer"}
                >
                  <RedditIcon className="mx-3" size={36} />
                </RedditShareButton>
              </div>
              <p className="pt-3 text-center">
                Copyright &copy;
                <span>
                  {new Date().getFullYear()}&nbsp; BSoft Tech | All Rights Reserved
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;