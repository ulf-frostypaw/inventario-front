import React from "react";
import Title from "./Title";
import Nbar from "./Nbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <Title title={title} />
      <Nbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
