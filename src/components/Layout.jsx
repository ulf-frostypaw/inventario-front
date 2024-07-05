import React from "react";
import Title from "./Title";

function Layout({ children, title }) {
  return (
    <div>
      <Title title={title} />
      {children}
    </div>
  );
}

export default Layout;
