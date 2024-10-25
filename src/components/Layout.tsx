import React from "react";
import Title from "./Title";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <Title title={title} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
