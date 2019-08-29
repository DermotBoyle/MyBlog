import React from "react";
import { Link } from "gatsby";
import Hero from "../components/hero";
import Layout from "../components/layout";
import usePosts from "../components/hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero></Hero>
      <Layout>
        <h1>Web Development - Education - Music - Lifestyle</h1>
        <p>
          Welcome to my blog, I built this to practice using Gatsby & GraphQL.
          It will be about whatever comes to mind! &nbsp;
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
