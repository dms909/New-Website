import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const FooterContainer = styled.div`
  margin-left: 27%;
  margin-right: 27%;
  padding-top: 75px;
  width: 50%;
  color: #a9a9a9;
  text-align: center;
  padding-bottom: 20px;

  .links {
    color: red;

    .fa-github {
      margin-right: 30px;
      color: #a9a9a9;
    }

    .fa-linkedin {
      color: #a9a9a9;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>© Dylan Smith, 2020</h3>
      <h3>Built and designed using React</h3>
      <div className="links">
        <a href="https://github.com/dms909">
          <FontAwesome
            className="fa-github"
            name="github"
            size="2x"
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/dylan-smith-0b4a60126/">
          <FontAwesome
            className="fa-linkedin"
            name="linkedin"
            size="2x"
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
          />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
