import BlogCard from "@/components/shared/dataEngineering/BlogCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------------hero section ------------------------ */}
        <div className=" w-full flex flex-col lg:flex-row  lg:items-center">
          <div className="flex flex-col  justify-center lg:w-1/2  gap-6 py-8 lg:pt-8">
            <p className="subtle-text font-bold">AI FOR PHARMA </p>
            <h1 className="h1">AI consultants for pharma</h1>
            <p className="subtle-text lg:w-3/4">
              AI is transforming healthcare, helping to speed up time to
              insights which can lead to better care outcomes and improved
              productivity and efficiency of care delivery.
            </p>
            <div>
              <Button className="btn">CONSULT WITH AN AI EXPERT</Button>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-end items-end">
            <div className="relative w-full aspect-square h-[285px] ">
              <Image src="/pharma-hero.png" alt="pharma" fill className="" />
            </div>
          </div>
        </div>

        {/* ---------------------------------Unlock section ------------------------ */}

        <div className=" flex  flex-col lg:flex-row gap-6 lg:gap-9  pt-16 lg:pt-20">
          <div className=" lg:w-1/2 ">
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className=" aspect-square h-[400px] lg:h-[503px]"
            />
          </div>
          <div className=" order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <h1 className="h1">Unlock the Potential of Healthcare AI</h1>
            <div className="space-y-6">
              <p className="subtle-text">
                Harness the power of AI to streamline and enhance the work of
                healthcare professionals by automating routine tasks with
                precision and efficiency. AI not only matches human accuracy but
                also accomplishes these tasks faster and at a significantly
                lower cost.
              </p>
              <p className="subtle-text">
                Harness the power of AI to streamline and enhance the work of
                healthcare professionals by automating routine tasks with
                precision and efficiency. AI not only matches human accuracy but
                also accomplishes these tasks faster and at a significantly
                lower cost.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------Healthcare problems---------------------- */}
        <div className=" space-y-14 lg:space-y-20">
          <h1 className="h1  text-center pt-8 lg:pt-10">
            How we can help solve Healthcare problems
          </h1>
          {/* -------------------------------------- */}
          <div className=" flex  flex-col lg:flex-row gap-6 lg:gap-9  ">
            <div className=" lg:w-1/2 ">
              <Image
                src="/risk.png"
                alt="unlock"
                width={610}
                height={100}
                className=" aspect-square h-[400px] lg:h-[503px]"
              />
            </div>
            <div className=" order-last lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
              <h1 className="h1">Unlock the Potential of Healthcare AI</h1>
              <div className="space-y-6">
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}

          {/* -------------------------------------- */}
          <div className=" flex  flex-col lg:flex-row gap-6 lg:gap-9  ">
            <div className=" lg:w-1/2 ">
              <Image
                src="/risk.png"
                alt="unlock"
                width={610}
                height={100}
                className=" aspect-square h-[400px] lg:h-[503px]"
              />
            </div>
            <div className=" order-last lg:order-first lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
              <h1 className="h1">Unlock the Potential of Healthcare AI</h1>
              <div className="space-y-6">
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}

          {/* -------------------------------------- */}
          <div className=" flex  flex-col lg:flex-row gap-6 lg:gap-9  ">
            <div className=" lg:w-1/2 ">
              <Image
                src="/tiral-data.png"
                alt="unlock"
                width={610}
                height={100}
                className=" aspect-square h-[400px] lg:h-[503px]"
              />
            </div>
            <div className=" order-last lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
              <h1 className="h1">Unlock the Potential of Healthcare AI</h1>
              <div className="space-y-6">
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
                <p className="subtle-text">
                  Harness the power of AI to streamline and enhance the work of
                  healthcare professionals by automating routine tasks with
                  precision and efficiency. AI not only matches human accuracy
                  but also accomplishes these tasks faster and at a
                  significantly lower cost.
                </p>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}
        </div>

        {/* --------------- why choose----------------------- */}

        <div className=" pt-16 lg:pt-20">
          <h1 className=" h1 text-center">Why Choose Cogninest AI?</h1>

          <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-10 lg:pt-14">
            {/* --------------------------- */}
            <div className="space-y-5">
              <div className=" relative aspect-square h-[250px] w-full">
                <Image src="/pharma-choose.png" alt="pharma" fill />
              </div>
              <div className=" space-y-6">
                <h4 className=" font-bold">Knowledge</h4>

                <p>
                  At Cogninest AI, we are globally recognized data science
                  experts with a proven track record, boasting over 500
                  citations and patents. Our specialization spans Computational
                  Linguistics, Natural Language Processing (NLP), Machine
                  Learning, Deep Learning, and Data Analytics, ensuring we
                  deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            {/* --------------------------- */}

            {/* --------------------------- */}
            <div className="space-y-5">
              <div className=" relative aspect-square h-[250px] w-full">
                <Image
                  src="/pharma-choose.png"
                  alt="pharma"
                  fill
                  className="  a"
                />
              </div>
              <div className=" space-y-6">
                <h4 className=" font-bold">Knowledge</h4>

                <p>
                  At Cogninest AI, we are globally recognized data science
                  experts with a proven track record, boasting over 500
                  citations and patents. Our specialization spans Computational
                  Linguistics, Natural Language Processing (NLP), Machine
                  Learning, Deep Learning, and Data Analytics, ensuring we
                  deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            {/* --------------------------- */}

            {/* --------------------------- */}
            <div className="space-y-5">
              <div className=" relative aspect-square h-[250px] w-full">
                <Image
                  src="/pharma-choose.png"
                  alt="pharma"
                  fill
                  className="  "
                />
              </div>
              <div className=" space-y-6">
                <h4 className=" font-bold">Knowledge</h4>

                <p>
                  At Cogninest AI, we are globally recognized data science
                  experts with a proven track record, boasting over 500
                  citations and patents. Our specialization spans Computational
                  Linguistics, Natural Language Processing (NLP), Machine
                  Learning, Deep Learning, and Data Analytics, ensuring we
                  deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            {/* --------------------------- */}
          </div>
        </div>

        {/* ------------------------------let us solve---------------- */}

        <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center max-w-5xl mx-auto my-10 lg:my-16  ">
          <div className="space-y-6">
            <h2 className="h2  mx-auto w-3/4">
              Let us solve your impossible problem
            </h2>
            <p className=" paragraph lg:mx-8">
              Speak to one of our industry specialists about how Artificial
              Intelligence can help solve your impossible problem
            </p>
            <Link href="/contact-us">
            <Button className="btn  ">CONTACT US</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
