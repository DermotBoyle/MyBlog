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
      
        <h2 className="latest-posts"> Latest posts... </h2>
        {posts.reverse().map(post => (
          <PostPreview key={post.slug} post={post}></PostPreview>
        ))}
      </Layout>
    </>
  );
};
