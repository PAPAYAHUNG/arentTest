import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import TopNavigation from '../TopNavigation';
interface ILayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.div``;

const Layout = ({ children }: ILayoutProps) => {

  return (
    <StyledLayout>
      <TopNavigation  />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
