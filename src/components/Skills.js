import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import React from "react";

import bootstrap from "../assets/img/Bootstrap.svg";
import javascript from "../assets/img/JavaScript.svg";
import css from "../assets/img/CSS3.svg";
import C from "../assets/img/C.svg";
import figma from "../assets/img/Figma.svg";
import github from "../assets/img/nav-icon2.png";
import nodejs from "../assets/img/Node.js.svg";
import nextjs from "../assets/img/Next.js.svg";
import mongodbb from "../assets/img/MongoDB.svg";
import Matlab from "../assets/img/MATLAB.svg";
import Mysql from "../assets/img/MySQL.svg";
import Kaggle from "../assets/img/Kaggle.svg";
import linux from "../assets/img/Linux.svg";
import Postgre from "../assets/img/PostgresSQL.svg";
import python from "../assets/img/Python.svg";
import opencv from "../assets/img/OpenCV.svg";
import Selenium from "../assets/img/Selenium.svg";
import Sqldev from "../assets/img/SQL Developer.svg";
import tensor from "../assets/img/TensorFlow.svg";
import eact from "../assets/img/meter1.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tools & Tech.</h2>
              <p>A snapshot of the technologies, frameworks, and tools I regularly use to build, design, and deploy scalable applications. </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customTransition="all 0.5s ease"
                transitionDuration={500}
                slidesToSlide={1}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item"><img src={eact} alt="React" /><h5>React</h5></div>
                <div className="item"><img src={bootstrap} alt="Bootstrap" /><h5>Bootstrap</h5></div>
                <div className="item"><img src={javascript} alt="JavaScript" /><h5>JavaScript</h5></div>
                <div className="item"><img src={css} alt="CSS" /><h5>CSS</h5></div>
                <div className="item"><img src={C} alt="C" /><h5>C</h5></div>
                <div className="item"><img src={figma} alt="Figma" /><h5>Figma</h5></div>
                <div className="item"><img src={github} alt="GitHub" /><h5>GitHub</h5></div>
                <div className="item"><img src={nodejs} alt="Node.js" /><h5>Node.js</h5></div>
                <div className="item"><img src={nextjs} alt="Next.js" /><h5>Next.js</h5></div>
                <div className="item"><img src={mongodbb} alt="MongoDB" /><h5>MongoDB</h5></div>
                <div className="item"><img src={Matlab} alt="MATLAB" /><h5>MATLAB</h5></div>
                <div className="item"><img src={Mysql} alt="MySQL" /><h5>MySQL</h5></div>
                <div className="item"><img src={Kaggle} alt="Kaggle" /><h5>Kaggle</h5></div>
                <div className="item"><img src={linux} alt="Linux" /><h5>Linux</h5></div>
                <div className="item"><img src={Postgre} alt="PostgreSQL" /><h5>PostgreSQL</h5></div>
                <div className="item"><img src={python} alt="Python" /><h5>Python</h5></div>
                <div className="item"><img src={opencv} alt="OpenCV" /><h5>OpenCV</h5></div>
                <div className="item"><img src={Selenium} alt="Selenium" /><h5>Selenium</h5></div>
                <div className="item"><img src={Sqldev} alt="SQL Developer" /><h5>SQL Developer</h5></div>
                <div className="item"><img src={tensor} alt="TensorFlow" /><h5>TensorFlow</h5></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
};
