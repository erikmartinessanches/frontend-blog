import React from 'react';
import Button from '@mui/material/Button';
import { BlogPostList } from './BlogPostList';
import { getUncommentedBlogPosts } from '../BlogPostData';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
  return (
    <div>
      <div>
        <Typography variant="h2" component="div" gutterBottom>
          Blog posts
        </Typography>
        <Button variant="contained">Write a blog post</Button>
      </div>
      <Typography variant="h2" component="div" gutterBottom>
        Uncommented blog posts
      </Typography>
      <BlogPostList data={getUncommentedBlogPosts()} />
    </div>
  );
};
