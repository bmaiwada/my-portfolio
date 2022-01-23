import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      {/* heading for title */}
      <h1 className="py-5"> Skills </h1>
      <h3> I have experience with these technologies</h3>
      {/* - */}
      <h3 className="software"> Software Engineering</h3>
      <div className="skillsGrid">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt="The logo icon for python"
          title="Python"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          alt="The logo icon for C"
          title="C"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="The logo icon for Java"
          title="Java"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="The logo icon for JavaScript"
          title="JavaScript"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML5"
          title="HTML5"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS"
          title="CSS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          alt="The logo icon for Django"
          title="Danjo"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          alt="The logo icon for ExpressJS"
          title="ExpressJS"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
          title="NodeJS"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          alt="The logo icon for PostgreSQL"
          title="PostgreSQL"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="The logo icon for MongoDB"
          title="MongoDB"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHUb"
          title="GitHUb"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="The logo icon for Git"
          title="Git"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
          alt="The logo icon for Heroku"
          title="Heroku"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          alt="The logo icon for Bootstrap"
          title="Bootstrap"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
          alt="The logo icon for Ionic"
          title="Ionic"
        />
      </div>
      {/* - */}
      <h3 className="computer"> Computer Engineering</h3>
      <div className="skillsGrid">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original-wordmark.svg"
          alt="The logo icon for Rasphberry Pi"
          title="Rasphberry"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
          alt="The logo icon for Arduino"
          title="Arduino"
        />
        <Skill
          source="http://www.syncnet.hu/assets/images/logos/embedded/embeddedLinux.png"
          alt="The logo icon for MCU"
          title="MCU"
        />
        <Skill
          source="https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-iot-internet-of-behavior-iob-filled-outline-filled-outline-geotatah.png"
          alt="The logo icon for IoT"
          title="IoT"
        />
        <Skill
          source="http://www.syncnet.hu/assets/images/logos/operating_systems/freertos.png"
          alt="The logo icon for RTOS"
          title="RTOS"
        />
        <Skill
          source="http://www.syncnet.hu/assets/images/logos/development/keil.png"
          alt="The logo icon for Keil"
          title="Keil"
        />
      </div>
    </div>
  );
};
export default Skills;
