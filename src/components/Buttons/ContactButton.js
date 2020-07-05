import React from "react";
import styled from "styled-components";

const ContactButtonContainer = styled.div`
  padding-right: 25px;
  button {
    background-color: #ffffff;
    border: solid #000000;
    color: #000000;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

    :hover {
      background-color: #000000;
      color: #ffffff;
      transition: 0.7s;
    }
  }
`;

const ContactButton = () => {
  return (
    <ContactButtonContainer>
      <button>Contact Me!</button>
    </ContactButtonContainer>
  );
};

export default ContactButton;
