import React from "react";
import Button from "../../Button";

interface CardProps {
  src: string;
  title: string;
  description: string;
}

const cards: React.FC<CardProps> = ({ src, title, description }) => {
  return (
    <>
      <div className="basis-1/5 bg-white p-4 shadow-lg shadow-gray-400 rounded-lg w-[16rem]">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="w-full mb-[.8rem] rounded-xl"
        />
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-2">{title}Aire tu kesote</h2>
        </div>
        <p className="text-gray-500 text-sm text-center">
          {description}Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-center mt-4">
          <Button variant="primary" children="Ver detalles" />
        </div>
      </div>
    </>
  );
};

export default cards
