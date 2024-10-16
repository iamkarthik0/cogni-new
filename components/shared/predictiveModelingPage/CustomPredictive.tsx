import Image from "next/image";
import React from "react";

const Checked = () => {
  return (
    <div className="flex  justify-center items-center gap-4 md:w-3/4 ">
      <Image src="/Checked.png" alt="checked" width={50} height={59} />
      <p>
        Improving customer service and retention rates by getting actionable
        insights into your customers' needs and behaviors.
      </p>
    </div>
  );
};

const CustomPredictive = () => {
  return (
    <div className=" flex flex-col  justify-center items-center">
      <div className=" space-y-8">
        <h1 className="h1">
          Custom Predictive Analytics Software Can Support Your Business in Many
          Ways
        </h1>
        <p className=" subtle-text">
          Predictive analytics tools can be used to support your business in
          many ways. Some of the benefits of predictive modeling include:
        </p>
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-2 w-full  place-items-start py-10 lg:py-14 gap-8 ">
        <div className=" w-full">
          <Checked />
        </div>
        <div className=" w-full">
          <Checked />
        </div>
        <div className=" w-full">
          <Checked />
        </div>
        <div className=" w-full">
          <Checked />
        </div>
      </div>
    </div>
  );
};

export default CustomPredictive;
