import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Image from "gatsby-image";
import ReadLink from "./read-link";

const PostPreview = ({ post }) => (
  <article className="blog-post"
    css={css`
      display: flex;
      border-bottom: 1px solid #ddd;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      align-items: centre;
      margin-left: 30%;
      margin-right: 30%;
    `}
  >
    {" "}
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
            margin-bottom: 1rem;
            min-width: 100px;
            max-height: 100px;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>

      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
