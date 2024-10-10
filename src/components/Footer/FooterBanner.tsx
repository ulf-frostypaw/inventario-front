import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../SectionHeader/Heading";
function FooterBanner() {
  return (
    <div className="rounded-2xl bg-[url('/bgProducts.jpg')] bg-cover bg-center bg-no-repeat py-16 text-white">
      <Heading className="mb-0" isMain isCenter>
        Don't wanna miss our offers?
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%]">
        Drop your email below and start receiving the best offers from HotKicks
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Button variant="primary">
            Subscribe
        </Button>
      </div>
    </div>
  );
}

export default FooterBanner;
