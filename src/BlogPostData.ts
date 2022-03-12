import {
  AppRegistrationSharp,
  BentoSharp,
  BorderStyle,
} from '@mui/icons-material';

export interface BlogPostData {
  blogPostId: number;
  title: string;
  userName: string;
  created: Date;
  content: string;
  comments: CommentData[];
}

export interface CommentData {
  commentId: number;
  content: string;
  userName: string;
  created: Date;
}

const blogPosts: BlogPostData[] = [
  {
    blogPostId: 1,
    title: 'Why I am a good boy',
    content:
      "There seems to be reason to believe that I'm a good boy. Do my dear blog readers agree?",
    userName: 'Erik',
    created: new Date(),
    comments: [
      {
        commentId: 1,
        content: "Sure thing, you're the best.",
        userName: 'Vela',
        created: new Date(),
      },
      {
        commentId: 2,
        content: 'Only if you save the galaxy.',
        userName: 'Juno',
        created: new Date(),
      },
    ],
  },
  {
    blogPostId: 2,
    title: 'Which sport is the best?',
    content: "I believe it's tennis due to reasons.",
    userName: 'Erik',
    created: new Date(),
    comments: [],
  },
];

//Function that returns uncommented blog posts.
//Later I want to return unread blog posts.
export const getUncommentedBlogPosts = (): BlogPostData[] => {
  return blogPosts.filter((bp) => bp.comments.length === 0);
};
