import React from "react";
import Title from "./Title";
import Header from "./Header";
import Nbar from "./Nbar";
import Footer from './Footer/Footer';

function Layout({ children, title }) {
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
