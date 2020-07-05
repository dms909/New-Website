import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  margin-left: 30px;

  .experienceHeader {
    display: flex;

    h5 {
      padding-right: 25px;
    }
  }

  .subtitle {
    margin-top: -30px;
  }
`;

const Experience2 = (props) => {
  return (
    <ExperienceContainer>
      <div className="experienceHeader">
        <h5>{props.title}</h5>
        <h6>
          <i> {props.date}</i>
        </h6>
      </div>
      <h6 className="subtitle">{props.subtitle}</h6>
      <p></p>
    </ExperienceContainer>
  );
};

export default Experience2;
