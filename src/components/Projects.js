import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from "react";

import projImg1 from "../assets/img/ekta.png";
import projImg2 from "../assets/img/dna.jpg";
import projImg3 from "../assets/img/unit.jpg";
import projImg4 from "../assets/img/dbms.jpg";
import projImg5 from "../assets/img/face.jpg";
import projImg6 from "../assets/img/kiddocaree.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "EktaFund",
      description:
        "A full-stack donation platform for NGO onboarding and donor interaction. Built with React, Express, and MongoDB.",
      imgUrl: projImg1,
      repoUrl: "https://github.com/kunj-bhuva/Ekta_Fund",
    }
    ,
    {
      title: "Police DBMS",
      description:
        "PostgreSQL system for managing legal guardian records linked to police cases.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/kunj-bhuva/Legal-Guardian",
    },
    {
      title: "HITS: Unit Test Generation",
      description:
        "LLM-based Java unit test generation using code slicing and Python pipelines.",
      imgUrl: projImg3,
      repoUrl: "https://github.com/kunj-bhuva/HITS-python",
    },
    {
      title: "KiddoCaree",
      description:
        "Designed a user-friendly mobile interface that connects parents with verified babysitters based on location, availability, and ratings. .",
      imgUrl: projImg6,
      repoUrl: "https://github.com/kunj-bhuva/KiddoCare_UX_Group10",
    },
    {
      title: "DNA Steganography",
      description:
        "Secure data hiding using DNA sequence encoding and cryptography.",
      imgUrl: projImg2,
      repoUrl: "https://encryptdna.weebly.com/",
    },
    {
      title: "Face Mask Detection",
      description:
        "Real-time mask detection using OpenCV, and TensorFlow.",
      imgUrl: projImg5,
      repoUrl: "https://github.com/kunj-bhuva/Face_Recognition_Attendance",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A showcase of the work I've done—real-world applications,
                    academic projects, and personal experiments that reflect my
                    skills and growth as a developer.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
