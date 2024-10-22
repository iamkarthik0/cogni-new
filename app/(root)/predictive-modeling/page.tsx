import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";

import CustomPredictive from "@/components/shared/predictiveModelingPage/CustomPredictive";
import PredictiveHero from "@/components/shared/predictiveModelingPage/PredictiveHero";
import { Button } from "@/components/ui/button";


import Link from "next/link";
import React from "react";

const page = async () => {
  
  return (
    <>
      <PredictiveHero />

      {/* ---------------  Our Experts Section--------------- */}

      <div className=" pt-8 lg:pt-14">
        <div className=" w-full flex flex-col text-center  justify-center items-center py-20 bg-[#F2F2F2] gap-5 ">
          <h1 className="h2">Reach Out to Our Experts</h1>
          <p className=" px-8 lg:px-32">
            If you are looking for a partner to help you develop a predictive
            analytics solution, Cogninest AI is the right choice. We have a team
            of experienced Data Scientists and Machine Learning Engineers who
            can help you turn your data into insights that drive better
            decision-making. Our AI Product Managers will support you throughout
            the development process, from concept to delivery. To discuss your
            project with our experts, contact us today.
          </p>
          <div>
          <Link href="/contact-us">
            <Button className="btn">REACH OUT TO US</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------------------- Custom Predictive section------------------- */}
        <div className=" pt-10 lg:pt-16">
          <CustomPredictive />
        </div>
        {/* ---------------BlogUseCase Component--------------- */}
        <div className="pt-12 lg:pt-16">
          <BlogsAndUseCases />
        </div>

        {/* ---------------ContactCard Component--------------- */}
        <div className="py-12 lg:py-24">
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default page;
