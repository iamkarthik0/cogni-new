"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from 'react-intersection-observer';

const CloudHero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div ref={ref}>
      <div className={`flex flex-col lg:flex-row gap-6 transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-1 justify-center flex-col lg:max-w-1/2 space-y-5 pt-8 lg:pt-0">
          <h1 className="h1 lg:max-w-2xl">
            Cloud Consultant
          </h1>
          <p className="lg:max-w-xl">
            Secure and managed cloud solutions that drive the outcome-based modernization you need
          </p>
          <Link href="contact-us">
            <Button className="btn">CONSULT WITH AN AI EXPERT</Button>
          </Link>
        </div>

        <div className="lg:max-w-1/2">
          <Image
            src="/aifor.png"
            alt="finance"
            width={496}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default CloudHero;
