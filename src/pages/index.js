import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../components/hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Dermot's Web Development Blog</h1>
      <p>
        Welcome to my blog, I write mostly about the stuff I learn about coding!
      </p>
      <Link to="/about/">Learn about me &rarr;</Link>
      <h2> Read my blog </h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post}></PostPreview>
      ))}
    </Layout>
  );
};
