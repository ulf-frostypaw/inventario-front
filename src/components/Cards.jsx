import React from "react";
import Button from "../components/Button";

const cards = ({src, title, description}) => {
  return (
    <>
      <div className="bg-white p-4 shadow-lg shadow-gray-400 rounded-lg w-[16rem]">
        <img
          src={src}
          alt=""
          className="w-full mb-[.8rem] rounded-xl"
        />
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        </div>
        <p className="text-gray-500 text-sm text-center">
          {description}
        </p>
        <div className="flex justify-center mt-4">
          <Button variant="primary" children="Ver detalles" />
        </div>
      </div>
    </>
  );
};

export default cards;
