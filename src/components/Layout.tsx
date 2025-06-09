
import React from 'react';
import AssistantBot from './AssistantBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <AssistantBot />
    </div>
  );
};

export default Layout;
