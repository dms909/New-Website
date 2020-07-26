import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import EducationExperience from "../EducationExperience";
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
    margin-left: -40px;
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
    payload: (
      <EducationExperience
        title={"Iowa State University"}
        date={"May 2020 - Present"}
        subtitle={"GPA: 3.27"}
        bulletPoints={[
          "Relevant Coursework: Computer Science 352 - Operating Systems, Computer Science 311 - Algorithms, Computer Science 363 - Databases, Software Engineering 329 - Project Management, Computer Science 228 - Data Structures, Computer Science 327 - Advanced Programming Concepts, Computer Science 227 - Object Oriented Programming ",
        ]}
      />
    ),
  };
};

const displayPrincipal = () => {
  hasBeenClicked = true;
  return {
    type: "PRINCIPAL",
    payload: (
      <EducationExperience
        title={"Principal Financial Group"}
        date={"May 2020 - Present"}
        subtitle={"Software Engineering Intern"}
        bulletPoints={[
          "> Worked with the Individual Disability Insurance team to develop a web application that provides clients with disability insurance quotes",
          "> Partnered with another intern to create an application that allows for different teams within Principal to monitor the uptime of their various microservices",
          "> Collaborated with a team of interns to create a social media application that allows local nonprofits to share posts and requests resources during the 2020 Principal Code Jam",
          "> Built and maintained software using React, Redux, and Java Spring",
          "> Gained experience with both AWS and Azure ",
          "> Followed Scrum and Kanban methodologies",
        ]}
      />
    ),
  };
};

const displayTA = () => {
  hasBeenClicked = true;
  return {
    type: "TA",
    payload: (
      <EducationExperience
        title={"Iowa State Department of Computer Science"}
        date={"August 2019 - May 2020"}
        subtitle={"Computer Science 227 Teaching Assistant"}
        bulletPoints={[
          "> Used my knowledge of Java and object-oriented programming to explain questions and assist students with understanding course material",
          "> Lead a weekly lab section of 40 students to help solidify programming concepts and skills",
          "> Held office hours for students to receive additional help to ensure their success in the course",
          "> Graded and provided feedback on student’s assignments and exams",
        ]}
      />
    ),
  };
};

const displayHyvee = () => {
  hasBeenClicked = true;
  return {
    type: "HY-VEE",
    payload: (
      <EducationExperience
        title={"Hy-Vee Inc."}
        date={"May 2019 - August 2019"}
        subtitle={"Software Engineering Intern"}
        bulletPoints={[
          "> Contributed extensively to the development and launch of pharmacy family accounts, a web application dedicated to allowing users to manage prescriptions for their authorized family members",
          "> Utilized React and Redux to build interactive front-end pages for pharmacy family accountss",
          "> Developed and maintained RESTful APIs using .NET Core with C#",
          "> Wrote tests to provide 100% test coverage to follow TDD methodologies",
          "> Worked using the Scrum Agile framework",
        ]}
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
        <h1>
          {hasBeenClicked ? (
            display
          ) : (
            <EducationExperience
              title={"Iowa State University"}
              date={"May 2020 - Present"}
              subtitle={"GPA: 3.27"}
              bulletPoints={[
                "Relevant Coursework:omputer Science 352 - Operating Systems, Computer Science 311 - Algorithms, Computer Science 363 - Databases, Software Engineering 329 - Project Management, Computer Science 228 - Data Structures, Computer Science 327 - Advanced Programming Concepts, Computer Science 227 - Object Oriented Programming ",
              ]}
            />
          )}
        </h1>
      </div>
    </EducationExperienceContainer>
  );
};

export default EducationExperienceSelector;
