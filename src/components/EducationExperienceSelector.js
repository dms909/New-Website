import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import IowaState from "./IowaState";
import Experience from "./Experience";
import EducationExperienceReducer from "../reducers/EducationExperienceReducer";

const EducationExperienceContainer = styled.div`
  border-style: solid;
  border-color: #b0b0b0;
  width: 65%;
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

const displayIowaState = () => {
  return {
    type: "IOWASTATE",
    payload: <IowaState />,
  };
};

const displayPrincipal = () => {
  return {
    type: "PRINCIPAL",
    payload: <Experience />,
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
          <li>ISU Department of Computer Science</li>
          <li>Hy-Vee Inc.</li>
        </ul>
      </div>
      <div onLoad={() => dispatch(displayIowaState())}>
        <h1>{display}</h1>
      </div>
    </EducationExperienceContainer>
  );
};

export default EducationExperienceSelector;
