import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import CustomPredictive from "@/components/shared/predictiveModelingPage/CustomPredictive";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await client.fetch(landingQuery);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------Hero Section--------------------- */}
        <div className=" w-full flex flex-col lg:flex-row gap-4 ">
          <div className="flex flex-col  justify-center lg:w-1/2  gap-6 py-8 lg:pt-8">
            {/* <p className="subtle-text">We will provide</p> */}
            <h1 className="h1">Predictive Analytics Services and Solutions</h1>
            <p className="subtle-text font-semibold">
              Transform Your Data Into Predictive Insights With Our Custom
              Solutions...
            </p>
            <p className="subtle-text ">
              Predictive analytics is a field of data science that uses
              historical data and machine learning algorithms to make
              predictions about future events. This technology is used across
              industries for various applications, such as identifying trends,
              predicting demand, and making decisions about pricing and
              marketing strategies.
            </p>
            <p className="subtle-text ">
              At Cogninest AI, we specialize in developing custom predictive
              analytics solutions that help our clients unlock the value in
              their data. Our team of experienced data scientists and machine
              learning engineers will work with you to understand your specific
              needs and build a solution that meets your unique requirements.
            </p>
            <div>
              <Button className="btn">
                CONSULT YOUR PROJECT WITH AN AI EXPERT
              </Button>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-center items-center">
            <div className="relative w-full aspect-square overflow-hidden ">
              <Image
                src="/predictive.png"
                alt="Person using computer with data visualizations"
                fill
                className=" aspect-square "
              />
            </div>
          </div>
        </div>

        {/* ---------------------------Second Section--------------------- */}

        <div className=" flex flex-col gap-8  pt-10 text-left lg:pt-14">
          <h1 className=" h1">
            Our Expertise in Developing Predictive Analytics Software
          </h1>
          <p className=" subtle-text">
            Cogninest AI offers custom development services for predictive
            analytics solutions to help you transform your data into insights
            that drive better decision-making. We use cutting-edge deep learning
            technologies to develop predictive models that are accurate and
            reliable. Our team has expertise in a wide range of predictive
            analytics methods, including:
          </p>
        </div>

        <div className="pt-12 ">
          <DataScienceConsulting services={data.consultingServices} />
        </div>
      </div>

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
