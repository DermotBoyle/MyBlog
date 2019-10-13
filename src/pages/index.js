import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../components/hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <p>
          <strong>
            <Link to="/about/">Learn About Me&rarr;</Link>
          </strong>
        </p>
        <h2> Read my blog </h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post}></PostPreview>
        ))}
      </Layout>
    </>
  );
};
