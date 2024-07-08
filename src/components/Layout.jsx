import React from "react";
import Title from "./Title";
import Header from "./Header";

function Layout({ children, title }) {
  return (
    <div>
      <Title title={title} />
      <Header />
      {children}
    </div>
  );
}

export default Layout;
