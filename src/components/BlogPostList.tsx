import React from 'react';
import ts from 'typescript';
import { BlogPostData } from '../BlogPostData';
import { BlogPost } from './BlogPost';

//Defining the interface for the component props.
interface Props {
  data: BlogPostData[];
}

export const BlogPostList = ({ data }: Props) => (
  <ul>
    {data.map((blogpost) => (
      <li key={blogpost.blogPostId}>
        <BlogPost data={blogpost} />
      </li>
    ))}
  </ul>
);
