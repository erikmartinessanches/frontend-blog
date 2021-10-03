import React from 'react';
import { BlogPostData } from '../BlogPostData';

interface Props {
  data: BlogPostData;
}

export const BlogPost = ({ data }: Props) => (
  <div>
    <div>{data.title}</div>

    <div>
      {`Written by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
