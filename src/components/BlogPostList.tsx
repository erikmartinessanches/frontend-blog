import React from 'react';
import { BlogPostData } from '../BlogPostData';
import { BlogPost } from './BlogPost';

//Defining the interface for the component props.
interface Props {
  data: BlogPostData[];
  /*Props can be functions, like so. This allows a parent to pass in a function
  and determine the behavior of the child. Good parenting. 
  'Render prop.'*/
  renderItem?: (item: BlogPostData) => JSX.Element; //optional prop
}

export const BlogPostList = ({ data, renderItem }: Props) => (
  <ul>
    {data.map((blogpost) => (
      <li key={blogpost.blogPostId}>
        {renderItem ? renderItem(blogpost) : <BlogPost data={blogpost} />}
      </li>
    ))}
  </ul>
);
