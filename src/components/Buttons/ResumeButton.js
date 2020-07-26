import React from "react";
import styled from "styled-components";
import PDF from "../../Dylan-Smith-Resume.pdf";

const ResumeButtonContainer = styled.div`
  button {
    background-color: #000000;
    border: solid #000000;
    color: #ffffff;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

    :hover {
      background-color: #ffffff;
      color: #000000;
      transition: 0.7s;
    }
  }
`;

const ResumeButton = () => {
  return (
    <ResumeButtonContainer>
      <a href={PDF}>
        <button>My Resume</button>
      </a>
    </ResumeButtonContainer>
  );
};

export default ResumeButton;
