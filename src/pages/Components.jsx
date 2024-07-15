import React from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button";
import "../index.css";
import Input from "../components/Inputs";
import Nbar from "../components/Nbar";
import Card from "../components/Cards";
import Footer from "../components/Footer";

export const App = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center h-screen">
        <Button variant="primary" children="Click Me" />
        <Button variant="default" children="Click Me" />
        <Button variant="danger" children="Click Me" />
        <Button variant="succses" children="Click Me" />
        <div className="mx-4">
          <Input placeholder="Enter your name" type="email" />
        </div>  */}
        
          <Nbar /> 
          <Footer />
        
        {/* <Card src="https://placehold.co/600x400" description="Lorem ipsum to the doloire" title="Aigre Tuke Sote"/> */}

    {/* </div> */}
    </>
  );
};

export default App;
