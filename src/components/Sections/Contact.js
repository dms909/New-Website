import React from "react";
import styled from "styled-components";
import ContactButton from "../Buttons/ContactButton";
import ResumeButton from "../Buttons/ResumeButton";

const ContactContainer = styled.div`
  margin-top: 15%;
  margin-left: 250px;

  h2 {
    color: #808080;
    font-size: 30px;
  }

  h3 {
    font-size: 25px;
    width: 50%;
    line-height: 50px;
  }

  .buttons {
    display: flex;
    margin-right: -50px;
  }
`;
const Contact = () => {
  return (
    <ContactContainer>
      <h2>Let's Get In Touch!</h2>
      <hr align="left" />

      <h3>
        Feel free to reach out to me. I'm always looking for new opportunites
        and experiences!
      </h3>
      <div className="buttons">
        <ContactButton />
        <ResumeButton />
      </div>
    </ContactContainer>
  );
};

export default Contact;
