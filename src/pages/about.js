import React from "react";
import portrait from "../pages/images/dermot.jpg";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import "../components/layouts.scss"

export default () => (
  <>
    <Layout>
      <div class="about-container">
      <h1 class="about-me"
      css={css `
        text-decoration-line: underline;
        text-decoration-style: double;
        text-underline-offset: .2em
      `}
      >About Me</h1>
      <img
        className="portrait"        
        src={portrait}
        style={{width: '25%', borderRadius: '100px', alignItems: 'center'}}
        css={css`
      
        `}
      ></img>
      <p style={{width: '30%'}}
      css={css`
      margin-left: 1em;
      margin-bottom: 2em;
      `}
      >
        Hey, thanks for visiting my page ! 
        I use this page to post things that I have been learning recently.
        At the moment I am working as a frontend developer for Arbor Fintech.
        My work mostly revolves around coding for our great mobile app in Madrid, Spain.
        If you are interested in seeing other projects I have been working on, you can find my portfolio site &nbsp;
        <a href="https://dermotboyle.netlify.com/">here</a> :)
      </p>
      <Link
        css={css`
          margin-top: 0.5rem;
          margin-left: 3em;
        `}
        to="/"
      >
        &larr; back to home
      </Link>
      </div>
    </Layout>
  </>
);
