import React from "react"
import logo from "../images/portfolio-logo.png";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//React Scroll
import { Link } from "react-scroll";

const Navbar = () => {
    return (
      <nav className="navbar sticky-top navbar-expand-lg  bg-dark bg-opacity-12 justify-content-center">
        <div className="container-sm">
          <a className="navbar-brand" href="#home">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} color="orange" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto justify-content-center">
              <li className="nav-item active">
                <Link
                  smooth={true}
                  to="home"
                  offset={-110}
                  className="nav-link"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="aboutme"
                  offset={-110}
                  className="nav-link"
                >
                  about me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="skills"
                  offset={-110}
                  className="nav-link"
                >
                  skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="education"
                  offset={-110}
                  className="nav-link"
                >
                  education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="nav-link"
                >
                  experience
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="nav-link"
                >
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="testimonials"
                  offset={-110}
                  className="nav-link"
                >
                  testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  className="nav-link"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
