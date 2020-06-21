import React from "react";
import styled from "styled-components";

const IowaStateContainer = styled.div`
  margin-left: 30px;
`;

const IowaState = () => {
  return (
    <IowaStateContainer>
      <h6>Iowa State University</h6>
      <h4>
        <i>August 2017 - Present</i>
      </h4>

      <h4>Bachelors of Science in Software Engineering</h4>
      <h4>
        <i>GPA: 3.27</i>
      </h4>
      <h4>Minor in Cyber Security</h4>

      <p>
        <b>Relevant Coursework:</b> Computer Science 352 - Operating Systems,
        Computer Science 311 - Algorithms, Computer Science 363 - Databases,
        Software Engineering 329 - Project Management, Computer Science 228 -
        Data Structures, Computer Science 327 - Advanced Programming Concepts,
        Computer Science 227 - Object Oriented Programming
      </p>
    </IowaStateContainer>
  );
};

export default IowaState;
