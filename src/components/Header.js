import React from "react";
import FontAwesome from "react-fontawesome";
import faStyles from "font-awesome/css/font-awesome.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        Hey, <br /> I'm Dylan Smith.
      </h1>
      <h2>
        Software Engineering Major at <br /> Iowa State University
      </h2>
      <div className="HeaderGradient">
        <div className="HeaderArrow">
          <FontAwesome name="long-arrow-down " size="3x" />
        </div>
      </div>
    </div>
  );
};

export default Header;
