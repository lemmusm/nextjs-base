import React, { FC } from 'react';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
