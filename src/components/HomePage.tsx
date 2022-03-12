import Button from '@mui/material/Button';
import { BlogPostList } from './BlogPostList';
import { getUncommentedBlogPosts } from '../BlogPostData';
import Typography from '@mui/material/Typography';
import { PageTitle } from './PageTitle';
import { Page } from './Page';

export const HomePage = () => (
  <Page>
    <div>
      <div>
        <Typography variant="h2" component="div" gutterBottom>
          Blog posts
        </Typography>
        <Button variant="contained">Write a blog post</Button>
      </div>
      <PageTitle>Uncommented blog posts</PageTitle>
      <BlogPostList
        data={getUncommentedBlogPosts()}
        //renderItem={(blogPost) => <div>{blogPost.title}</div>}
      />
    </div>
  </Page>
);
