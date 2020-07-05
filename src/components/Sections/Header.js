import React from "react";
import FontAwesome from "react-fontawesome";
import faStyles from "font-awesome/css/font-awesome.css";
import { Link, animateScroll as scroll } from "react-scroll";
import me from "../../photos/me.jpg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  margin-left: 250px;
  margin-top: 250px;

  h1 {
    font-size: 50px;
    line-height: 60px;
    -webkit-animation: fadeIn 4s;
  }

  h2 {
    font-size: 22px;
    color: #808080;
    -webkit-animation: fadeIn 7s;
  }

  img {
    margin-left: 350px;
    margin-top: -30px;
    -webkit-animation: fadeIn 10s;
  }
`;

const HeaderGradientContainer = styled.div`
  background: -webkit-linear-gradient(left top, crimson 0%, blue 100%);
  width: 100px;
  height: 100px;
  margin-left: 750px;
  margin-top: 100px;
  border-radius: 1000px;
  padding: 5px;
`;

const HeaderArrowContainer = styled.div`
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 500px;

  :hover {
    background: black;
    color: white;
    transition: 0.7s;
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <div>
          <h1>
            Hey, <br /> I'm Dylan Smith.
          </h1>
          <h2>
            Software Engineering Major at <br /> Iowa State University
          </h2>
        </div>
        <img src={me} width="300" height="400" />
      </HeaderContainer>

      <HeaderGradientContainer>
        <HeaderArrowContainer>
          <FontAwesome name="long-arrow-down " size="3x" />
        </HeaderArrowContainer>
      </HeaderGradientContainer>
    </div>
  );
};

export default Header;
