import React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

//Define children prop with a type of ReactNode.
export const PageTitle = ({ children }: Props) => (
  <Typography variant="h2" component="div" gutterBottom>
    {children}
  </Typography>
);
