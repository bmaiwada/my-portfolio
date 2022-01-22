import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

//adding particles js @https://www.npmjs.com/package/tsparticles
import Particles from "react-tsparticles";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Particles
        className="tsparticles-canvas-el"
        params={{
          particles: {
            color: {
              value: "#f9ab00",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 4,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
