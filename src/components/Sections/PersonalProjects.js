import React from "react";
import styled from "styled-components";
import twitterLogo from "../../photos/twitter_logo_volt.png";
import exercyze from "../../photos/exercyze.png";
import python from "../../photos/python.png";
import twitter from "../../photos/icons8-twitter-48.png";
import reddit from "../../photos/icons8-reddit-52.png";
import java from "../../photos/icons8-java-50.png";
import spring from "../../photos/icons8-spring-logo.svg";
import android from "../../photos/icons8-android-os-52.png";

const PersonalProjectsContainer = styled.div`
  margin-top: 100px;
  margin-left: 250px;

  h2 {
    color: #808080;
    font-size: 30px;
  }
`;

const AnimalBotContainer = styled.div`
  .AnimalBotHeader {
    display: flex;

    h2 {
      color: #1384ff;
      margin-left: 10%;
      margin-right: 10%;
    }
  }

  .AnimalBotContent {
    margin-top: -200px;
    margin-left: 10%;
    width: 35%;
  }

  h3 {
    color: #808080;
  }

  .techUsed {
    margin-left: 10%;

    .python {
      margin-right: 25px;
    }

    .twitter {
      margin-right: 25px;
    }

    .reddit {
      margin-right: 25px;
    }
  }
`;

const ExerCYzeContainer = styled.div`
  margin-top: 200px;
  .ExerCYzeHeader {
    display: flex;

    h2 {
      color: #1384ff;
      margin-left: 10%;
      margin-right: 10%;
    }

    img {
      margin-left: 5%;
    }
  }

  .AnimalBotContent {
    margin-top: -300px;
    margin-left: 10%;
    width: 35%;
  }

  h3 {
    color: #808080;
  }

  .techUsed {
    margin-left: 10%;

    .java {
      margin-right: 25px;
    }

    .spring {
      margin-right: 25px;
    }

    .android {
      margin-right: 25px;
    }
  }
`;

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer>
      <h2>Check Out My Projects</h2>
      <hr align="left" />

      <AnimalBotContainer>
        <div className="AnimalBotHeader">
          <h2>Animal Every Day Twitter Bot</h2>
          <img src={twitterLogo} width="350" height="300" />
        </div>
        <h3 className="AnimalBotContent">
          A bot that pulls cute animal images from various Reddit pages, and
          posts them to twitter. Check it out: @247Animals
        </h3>
        <div className="techUsed">
          <img className="python" src={python} width="35" height="40" />
          <img className="twitter" src={twitter} width="35" height="40" />
          <img className="reddit" src={reddit} width="35" height="40" />
        </div>
      </AnimalBotContainer>

      <ExerCYzeContainer>
        <div className="ExerCYzeHeader">
          <h2>ExerCYze Workout App</h2>
          <img src={exercyze} width="350" height="400" />
        </div>
        <h3 className="AnimalBotContent">
          An Android application that allows users to manage their workouts and
          share healthy habits with other users. Developed over the course of a
          semester for computer science 309.
        </h3>
        <div className="techUsed">
          <img className="java" src={java} width="35" height="40" />
          <img className="android" src={android} width="35" height="40" />
          <img className="spring" src={spring} width="35" height="40" />
        </div>
      </ExerCYzeContainer>
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
