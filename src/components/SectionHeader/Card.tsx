import React from "react";

function Card() {
  return (
    <div className="container items-stretch gap-y-5 lg:flex lg:gap-5 lg:gap-y-0">
      <div className="basis-[68%] items-center space-y-10 rounded-2xl bg-gray p-5 md:flex md:space-y-0 ">
        <div className="basis-[63%]">
          <h4 className="mb-5 text-xl font-medium text-primary">
            Lorem ipsum
          </h4>
          <h1
            className="text-[50px] font-medium tracking-tight"
            style={{ lineHeight: "1em" }}
          >
            Shop now!
          </h1>
          <p className="my-10 w-[80%] text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut dolore blanditiis fugiat reiciendis fugit consequatur pariatur sed unde, facere laborum consequuntur dicta. Autem similique accusantium nesciunt, quisquam animi et.
          </p>
          {/* <ButtonPrimary sizeClass="px-5 py-4">View Product</ButtonPrimary> */}
        </div>
        <div className="basis-[37%]">
          {/* <Image src={shoe_box} alt="shoe box" className="w-full" /> */}
        </div>
      </div>

      <div className="mt-5 basis-[30%] lg:mt-0">
        {/* <PromoTag /> */}
      </div>
    </div>
  );
}

export default Card;
