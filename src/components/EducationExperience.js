import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  margin-left: 30px;

  .experienceHeader {
    display: flex;

    h5 {
      padding-right: 25px;
    }
    i {
      color: #808080;
    }
  }

  .subtitle {
    margin-top: -30px;
  }

  li {
    color: #808080;
    margin: -30px 30px 40px 3px !important;
    font-size: 15px;
  }
`;

const EducationExperience = (props) => {
  return (
    <ExperienceContainer>
      <div className="experienceHeader">
        <h5>{props.title}</h5>
        <h6>
          <i> {props.date}</i>
        </h6>
      </div>
      <h6 className="subtitle">{props.subtitle}</h6>
      {props.bulletPoints.map((bulletPoint) => (
        <li>{bulletPoint}</li>
      ))}
    </ExperienceContainer>
  );
};

export default EducationExperience;
