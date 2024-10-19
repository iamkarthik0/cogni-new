import Image from "next/image";
import React from "react";

const WhyCogninest = () => {
  return (
    <div className=" space-y-9 ">
      <div className=" space-y-8">
        {" "}
        <h1 className="h1 text-center">
          Why Cogninest AI is the Best for Manufacturing
        </h1>
        <p className=" subtle-text text-center">
          Cogninest AI combines deep industry expertise with robust data-driven
          methodologies to deliver unparalleled solutions tailored specifically
          for the manufacturing sector. Our focus on enhancing operational
          efficiency, predictive maintenance, and real-time analytics ensures
          that manufacturers can make data-informed decisions and achieve
          maximum productivity. With a proven track record and a team of
          experts, Cogninest AI is the ideal partner for companies looking to
          embrace the future of manufacturing.
        </p>
      </div>
      <div>
        <div className=" w-full aspect-square relative h-[220px] md:h-[300px] lg:h-[404px]">
          <Image src="/cigni-manufacturing.png" fill alt="health" />
        </div>
      </div>
    </div>
  );
};

export default WhyCogninest;
