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
  .box {
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
    width: 960px;
    height: 370px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;

    text-align: left;
    background: white;

    img {
      display: block;

      margin-left: auto;
      margin-right: auto;
    }
    .body {
      padding: 20px;
      .heading {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .content {
        height: 80px;
        color: #8b939b;
        font-weight: 400;
      }
      .underline {
        background: #dde2e7;
        width: 100%;
        height: 1px;
        display: block;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .info {
        display: flex;
      }
    }
  }
`;

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer>
      <div className="box">
        <img src={twitterLogo} height="180" />
        <div class="body">
          <div class="heading">Animal Twitter Bot</div>
          <div class="content">
            A twitter bot that pulls cute pictures of animals from Reddit and
            posts them at various points throughout the day.{" "}
          </div>
          <span class="underline" />
          <div className="info">
            <img src={python} width="25" height="35" />
            <img src={twitter} width="25" height="35" />
            <img src={reddit} width="25" height="35" />
          </div>
        </div>
      </div>

      <div className="box">
        <img src={exercyze} height="180" />
        <div class="body">
          <div class="heading">ExerCYze Mobile Workout App</div>
          <div class="content">
            A mobile app that allows users to create workout routines and share
            them with other users.
          </div>
          <span class="underline" />
          <div className="info">
            <img src={java} width="25" height="35" />
            <img src={spring} width="25" height="35" />
            <img src={android} width="25" height="35" />
          </div>
        </div>
      </div>
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
