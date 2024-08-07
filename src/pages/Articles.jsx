import SideBar from "../components/SideBar/SideBar";
import React from "react";
import Nbar from "../components/Nbar";
import BodyCards from "../components/BodyCards/BodyCards";
import Footer from "../components/Footer";

const Articles = () => {
  return (
    <>
      <Nbar />
      <div className="flex">
        <SideBar />
        <BodyCards />
      </div>
    </>
  );
};
export default Articles;
