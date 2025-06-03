import { Col, Button } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="w-100" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button-link"
            >
              <Button className="github-btn"> View Project Repo</Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
