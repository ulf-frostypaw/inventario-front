import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

interface CardProps{
  productName: string;
  productDescription: string;
  priceSale: number;
  link: any;
  sourceImage: any;
  
}
function Card({productName = '', productDescription = '', priceSale = 0, link, sourceImage = ''}: CardProps) {  
  return (
    <div
      className={`transitionEffect relative rounded-2xl p-3 shadow-md bg-white`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
        {/* <div className="absolute left-6 top-0 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md">
          Descuento!
        </div> */}
        <LikeButton className="absolute right-2 top-2" />
        <Link
          className="h-[250px] w-full lg:h-[220px]"
          to={import.meta.env.VITE_APP_URL + "/product/" + link}
        >
          <img src={sourceImage} className="h-full w-full object-cover object-center" alt="" />
        </Link>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{productName}</h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">{productDescription.length > 40 ? productDescription.substring(0, 40) + '...' : productDescription}</p>
          <p className="text-lg font-medium text-primary">${priceSale}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
