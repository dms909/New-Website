import React from "react";
import styled from "styled-components";
import animalbot from "../photos/AnimalBot.png";

const PersonalProjectsContainer = styled.div`
  margin-top: 100px;
  margin-left: 250px;

  h2 {
    color: #808080;
    font-size: 30px;
  }
`;

const ProjectRightContainer = styled.div`
  display: flex;

  a {
    color: #000;
  }

  li {
    padding-right: -300px;
  }
`;

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer>
      <h2>Check Out My Projects</h2>
      <hr align="left" />

      <ProjectRightContainer>
        <div>
          <h3>Animal Twitter Bot - </h3>
          <h4>
            <a href="https://twitter.com/247Animals"> @247Animals</a>{" "}
          </h4>
          <ul>
            <li>
              A twitter bot that posts cute pictures of animals at several
              points throughout the day
            </li>
            <li>
              Developed a Python script that finds images from Reddit to post to
              Twitter, through the use of public APIs
            </li>
          </ul>
        </div>
        <img src={animalbot} width="300" height="300" />
      </ProjectRightContainer>
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
