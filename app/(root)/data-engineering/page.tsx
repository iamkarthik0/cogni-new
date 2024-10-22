import BlogCard from "@/components/shared/dataEngineering/BlogCard";
import DataEngineeringHero from "@/components/shared/dataEngineering/DataEngineeringHero";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <DataEngineeringHero />
        

        {/* -------------------------service Section ---------------- */}

        <div className="  pt-12 lg:pt-20">
          <div className="text-center mx-auto space-y-10">
            <h4 className=" h2">
              Actionable insights with right data strategy and robust platform
            </h4>

            <h1 className=" h2 text-[#0055A7]">SERVICES</h1>

            <BlogCard />
          </div>
          <div className="pt-12 md:pt-18 lg:pt-20 text-center space-y-8" >
            <h1 className=" h2 text-[#0055A7]">SOLUTIONS</h1>

            <BlogCard/>
          </div>
        </div>


          {/* -------------------------Why Choose us Section ---------------- */}

          <div className=" text-center space-y-8 pt-12 lg:pt-20">
            <h2 className="h2">Why choose us?</h2>
            <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 md:mx-24 lg:mx-32  gap-4">

              <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
                <h4>We are invested in realizing your vision of insights driven enterprise</h4>
              </div>

              <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
                <h4>We are invested in realizing your vision of insights driven enterprise</h4>
              </div>

              <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
                <h4>We are invested in realizing your vision of insights driven enterprise</h4>
              </div>

            </div>
          </div>
       {/* -------------------------Why Choose us Section ---------------- */}


        <div className=" pt-16 lg:pt-24  pb-8 lg:pb-16">
        <div className="py-16 lg:py-24 text-center  bg-[#F2F2F2] max-w-5xl mx-auto rounded-[50px]  space-y-8 h2 ">
              <h1>Engineer a robust data foundation with us</h1>

              <div>
              <Link href="/contact-us">
                <Button className="btn">CONTACT US</Button>
                </Link>
              </div>

        </div>



        </div>


      </div>
    </>
  );
};

export default page;
