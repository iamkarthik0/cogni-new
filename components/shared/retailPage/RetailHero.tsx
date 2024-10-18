import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const RetailHero = () => {
  return (
    <div >
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16  ">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            In a world where retail is evolving rapidly, understanding and anticipating customer behavior is key to success. 
            </h1>
           <Button className='btn'>Learn More</Button>
        
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-end items-center pt-6">
          <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden shadow-xl">
            <Image
              src="/retailHero.png"
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

export default RetailHero