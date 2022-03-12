import { BlogPostData } from '../BlogPostData';

interface Props {
  data: BlogPostData;
  showContent?: boolean; //optional prop
}

export const BlogPost = ({ data, showContent = true }: Props) => (
  <div>
    <div>{data.title}</div>

    {showContent /* Renders the div only if showContentis true */ && (
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div>
      {`Written by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
