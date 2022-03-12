import React from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  title?: string; //Title is optional
  children: React.ReactNode;
}

/** All components have implicit 'children' props.
 *
 * Notice that the component defines where it will render its children without
 * knowing the children, other than that they are of the type React.Node.
 */
export const Page = ({ title, children }: Props) => (
  <div>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);

export default Page;
