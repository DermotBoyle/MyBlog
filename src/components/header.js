import React from "react";
import styled from "@emotion/styled";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import { Link } from "gatsby";

library.add(faTwitter, faLinkedin, faGithub);

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }
`;

const Header = () => (
  <header  
    className="header"
  >
    
   
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0 !important;
      `}
    >
      <div className="nav-container">
      <NavLink to="/" activeClassName="current-page pages">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page pages"
      css={css `
      margin-left: 7%;
      `}
      
      >
        About
      </NavLink>
      </div>
      <div className="social-media-container">
      <a
        href={`https://twitter.com/dermotboyle`}
        style={{ color: "aliceblue", margin: "0" }}
      >
        <FontAwesomeIcon icon={faTwitter} style={{ color: "aliceblue" }}>
          here
        </FontAwesomeIcon>
      </a>
      <a
        href={`https://linkedin.com/in/boyledermot`}
        style={{ color: "aliceblue", margin: "0" }}
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "aliceblue" }}>
          here
        </FontAwesomeIcon>
      </a>
      <a
        href={`https://github.com/dermotboyle`}
        style={{ color: "aliceblue", margin: "0" }}
      >
        {" "}
        <FontAwesomeIcon icon={faGithub} style={{ color: "aliceblue" }}>
          here
        </FontAwesomeIcon>
      </a>
      </div>     
    </div>
  </header>
);

export default Header;
