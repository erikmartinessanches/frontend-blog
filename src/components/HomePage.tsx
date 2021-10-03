import React from 'react';
import Button from '@mui/material/Button';
import { BlogPostList } from './BlogPostList';
import { getUncommentedBlogPosts } from '../BlogPostData';

export const HomePage = () => {
  return (
    <div>
      <div>
        <h2>Blog posts</h2>
        <Button variant="contained">Write a blog post</Button>
      </div>
      <h2>Uncommented blog posts</h2>
      <BlogPostList data={getUncommentedBlogPosts()} />
    </div>
  );
};
