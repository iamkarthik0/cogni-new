import React from 'react';
import Image from 'next/image';


const CpgHero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Unlock the Power of Data to Drive Your CPG Success.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Leverage the power of data-driven innovation to help your CPG business thrive. 
              Our specialized business-focused application accelerators provide the tools and 
              strategies needed to maximize value from your data assets. By integrating a 
              connected infrastructure, we enable clients to fully capitalize on critical business 
              functions like Revenue Growth Management (RGM) and Marketing. Our tailored 
              solutions are built to overcome complex challenges, empowering businesses to 
              create long-term success and operational efficiencies.
            </p>
           
        
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-end items-center pt-6">
          <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden shadow-xl">
            <Image
              src="/cpg-hero.png"
              alt="Business professionals analyzing data"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpgHero;