import BlogCard from "@/components/shared/dataEngineering/BlogCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = async () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------Hero Section--------------------- */}
        <div className=" w-full flex flex-col lg:flex-row ">
          <div className="flex flex-col   lg:w-1/2  gap-8 py-8 lg:pt-8">
            <div>
              <h1 className=" h1 leading-[34px] lg:leading-[74px]">
                Build scalable AI/ML platforms to discover better insights with
                diversified data engineering services
              </h1>
            </div>

            <div>
              <Button className="btn">Discuss your business case</Button>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-end items-end">
            <div className="relative w-[500px] h-[455px] aspect-square rounded-xl overflow-hidden ">
              <Image
                src="/data-eng.png"
                alt="Person using computer with data visualizations"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------Section Second--------------------- */}

        <div className=" flex flex-col gap-8 ">
          <div>
            <h1 className=" h1 leading-[34px] lg:leading-[74px]">
              Accelerate generation and adoption of actionable insights through
              mature data platforms leveraging our data engineering solutions
              and services
            </h1>
          </div>

          <div className=" space-y-4 lg:space-y-6">
            <p>
              Many enterprises face challenges in delivering timely insights due
              to various factors such as fragmented data platforms, lack of data
              trust, limited data knowledge, and insufficient compute resources.
              Robust data engineering services are essential for generating
              actionable insights and ensuring their effective adoption by
              business leaders.
            </p>
            <p>
              At Cogninest AI, our data engineering offerings encompass
              Advisory, Implementation, and Operation services, all designed to
              reduce the cost of ownership, avoid technical debt, and enhance
              long-term sustainability. We understand that data platforms are
              the backbone of quality insight delivery, and our services are
              geared towards building and optimizing these platforms to meet
              your business needs.
            </p>
            <p>
              Our proprietary digital accelerators, combined with cloud data
              modernization, migration, and comprehensive data engineering
              services, significantly reduce time to value for our clients.
              These accelerators streamline all aspects of data operations,
              including data ingestion from various sources, provisioning
              insights, intelligent cataloging, ensuring data quality and trust,
              testing, and deployment. By leveraging AI/ML-based digital
              accelerators and strategic partnerships, we help you scale your
              data efforts, keeping pace with the demands of today&apos;s fast-moving
              business environment. Accelerate your data journey with Cogninest
              AI to achieve the speed, scale, and value your business needs.
            </p>

            <div>
              {" "}
              <Button className="btn"> Make your data reliable now...</Button>
            </div>
          </div>
        </div>

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
                <Button className="btn">CONTACT US</Button>
              </div>

        </div>



        </div>


      </div>
    </>
  );
};

export default page;
