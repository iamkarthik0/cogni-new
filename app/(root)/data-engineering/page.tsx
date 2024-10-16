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
              data efforts, keeping pace with the demands of today's fast-moving
              business environment. Accelerate your data journey with Cogninest
              AI to achieve the speed, scale, and value your business needs.
            </p>

          <div>  <Button className="btn"> Make your data reliable now...</Button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
