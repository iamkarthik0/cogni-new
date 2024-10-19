import Image from "next/image";
import React from "react";

const EnergyHero = () => {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16  ">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            Unlock the Future of Energy with Data Science & AI Solutions from Cogninest AI
            </h1>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-end items-center pt-6">
          <div className="relative  aspect-square w-[497px] h-[350px] lg:h-[436px] ">
            <Image
              src="/energy.png"
              alt="Business professionals analyzing data"
              fill
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      <div className=" space-y-8 pt-16 lg:pt-24">
        <h1 className="h1 text-center"> Cogninest AI is Best for Energy</h1>

        <p className=" subtle-text text-center">
          At Cogninest AI, we are dedicated to revolutionizing the energy sector
          with cutting-edge data science and artificial intelligence solutions.
          Our innovative approach empowers energy companies to optimize
          operations, reduce costs, and drive sustainable growth. With a deep
          understanding of the unique challenges faced by the energy industry,
          our team of experts delivers tailored solutions that enhance
          efficiency, improve predictive maintenance, and enable data-driven
          decision-making. Choose Cogninest AI to harness the power of data and
          transform your energy business.
        </p>
      </div>
    </div>
  );
};

export default EnergyHero;
