import React from "react";
import portrait from "../pages/images/portrait.jpg";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default () => (
  <>
    <Layout>
      <h1>About Me</h1>
      <img
        css={css`
          display: flex;
          justify-content: center;
          height: 30vh;
        `}
        src={portrait}
      ></img>
      <p>
        I am a JavaScript developer currently living in Madrid. Outside of
        development I am a keen musician and love nothing more than writing new
        songs and discovering new music from other artists. Currently, I am
        seeking oppotunities as a developer, I am open to relocation or working
        remotely. To see examples of my work you can visit my website{" "}
        <a href="https://dermotboyle.github.io">here</a>
      </p>
      <Link
        css={css`
          margin-top: 0.5rem;
        `}
        to="/"
      >
        &larr; back to home
      </Link>
    </Layout>
  </>
);
