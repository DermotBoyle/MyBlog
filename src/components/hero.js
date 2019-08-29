import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/madrid-skyline.jpg');
  background-position: top 40% center;
  background-size: cover;
  height: 20vw;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    margin-top: 10px;
  }

  p,
  a {
    color: #222;
    margin-top: 10px;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Dermot's Personal Blog</h1>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
