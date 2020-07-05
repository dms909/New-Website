import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import IowaState from "../IowaState";
import Experience2 from "../Experience2";
import EducationExperienceReducer from "../../reducers/EducationExperienceReducer";

const EducationExperienceContainer = styled.div`
  border-style: solid;
  border-color: #b0b0b0;
  box-shadow: 10px 10px 5px #aaaaaa;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 20px;
  margin-top: 30px;
  display: flex;

  li {
    list-style-type: none;
    line-height: 150%;
  }

  ul :hover {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`;

let hasBeenClicked = false;

const displayIowaState = () => {
  hasBeenClicked = true;
  return {
    type: "IOWASTATE",
    payload: <IowaState />,
  };
};

const displayPrincipal = () => {
  hasBeenClicked = true;
  return {
    type: "PRINCIPAL",
    payload: (
      <Experience2
        title={"Principal Financial Group"}
        date={"May 2020 - Present"}
        subtitle={"Software Engineering Intern"}
      />
    ),
  };
};

const displayTA = () => {
  hasBeenClicked = true;
  return {
    type: "TA",
    payload: (
      <Experience2
        title={"Iowa State Department of Computer Science"}
        date={"August 2019 - May 2020"}
        subtitle={"Computer Science 227 Teaching Assistant"}
      />
    ),
  };
};

const displayHyvee = () => {
  hasBeenClicked = true;
  return {
    type: "HY-VEE",
    payload: (
      <Experience2
        title={"Hy-Vee Inc."}
        date={"May 2019 - August 2019"}
        subtitle={"Software Engineering Intern"}
      />
    ),
  };
};

const EducationExperienceSelector = () => {
  const display = useSelector((state) => state.EducationExperienceReducer);
  const dispatch = useDispatch();

  return (
    <EducationExperienceContainer>
      <div>
        <h3>Education 📖</h3>
        <ul>
          <li onClick={() => dispatch(displayIowaState())}>
            Iowa State University
          </li>
        </ul>
        <h3>Experience 💻</h3>
        <ul>
          <li onClick={() => dispatch(displayPrincipal())}>
            Principal Financial Group
          </li>
          <li onClick={() => dispatch(displayTA())}>
            ISU Department of Computer Science
          </li>
          <li onClick={() => dispatch(displayHyvee())}>Hy-Vee Inc.</li>
        </ul>
      </div>
      <div onLoad={() => dispatch(displayIowaState())}>
        <h1>{hasBeenClicked ? display : <IowaState />}</h1>
      </div>
    </EducationExperienceContainer>
  );
};

export default EducationExperienceSelector;
