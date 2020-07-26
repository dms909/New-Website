import React from "react";
import styled from "styled-components";
import Logo from "../logo.png";

const TopNavContainer = styled.div`
  header {
    height: 76px;
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    border-bottom: 1px solid #eaeaea;
    z-index: 100;

    .content {
      display: flex;
      margin: 0 25%;

      .name {
        display: flex;
        margin-top: 10px;
        a {
          width: 100px;
          margin-left: 15px;
          margin-top: 15px;
        }
      }

      .nav {
        margin: 10px 50%;

        a {
          margin-right: 50px;
        }
      }
    }
  }
`;

const TopNav = () => {
  return (
    <TopNavContainer>
      <header>
        <div className="content">
          <div className="name">
            <img src={Logo} width="55" height="55" />
            <a>Dylan Smith</a>
          </div>

          <div className="nav">
            <ul className="Selector">
              <a>About</a>
              <a>Education/Experience</a>
              <a>Projects</a>
              <a>Contact</a>
            </ul>
          </div>
        </div>
      </header>
    </TopNavContainer>
  );
};

export default TopNav;
