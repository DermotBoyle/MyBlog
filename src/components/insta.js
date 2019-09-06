import React from "react";
import Image from "gatsby-image";
import useInstagram from "./hooks/useInstagram";
import { css } from "@emotion/core";

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <>
      <h2>Instagram posts from {username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            key={photo.id}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                margin-top: 0;
              `}
            ></Image>
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/dermoboyle`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
