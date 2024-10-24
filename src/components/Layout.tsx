import React from "react";
import Title from "./Title";
import Nbar from "./Nbar";
import Footer from "./Footer";
import SideBar from "@/pages/Dashboard/components/SideBarDashboard";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <Title title={title} />
      <Nbar />
      <SideBar/>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
