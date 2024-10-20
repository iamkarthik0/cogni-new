import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const MainSection = () => {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row p-20  bg-[#EEEEEE] rounded-[23px] gap-8">
        <div className="  flex  text-center lg:text-left lg:items-center  ">
          <h1 className=" h1  lg:max-w-xl">
            What types of <span className=" text-[#0055A7]">consulting</span> is
            offered?
          </h1>
        </div>

        <div className="  ">
          <ul className=" list-disc text-xl  tracking-tight sm:text-xl md:text-2xl">
            <li>Secure cloud design</li>
            <li>Cloud architectures</li>
            <li>Secure cloud implementation</li>
            <li>Cloud information security programs</li>
            <li>Cloud assessment and compliance</li>
            <li>Risk management</li>
            <li>Cloud security governance</li>
          </ul>
        </div>
      </div>

      <div className=" pt-16 lg:pt-20 space-y-12">
        <p className=" subtle-text">
          Although the cloud has become a transformation facilitator, there are
          still major obstacles standing in the way of cloud growth, and many
          businesses are finding it difficult to demonstrate the benefit of
          transformation or to link IT to business results. Cogninest AI offer a
          comprehensive strategy for recognising and resolving obstacles and
          advancing change from all angles.
        </p>
        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4">
            <h1 className=" h1">
              Digital business strategy and transformation
            </h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <ul className=" list-disc pl-4">
              <li>
                Evaluate the current state, envision objectives, and map steps
                to get there.
              </li>
              <li>
                Enable a digital business strategy, streamlining people,
                processes and technology.
              </li>
              <li>
                Improve customer experiences and generate business outcomes.
              </li>
            </ul>
          </div>

          <div className=" flex-1">
            <Image
              src="/digital-business.png"
              alt="business "
              width={539}
              height={396}
            />
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4 order-first lg:order-last">
            <h1 className=" h1">
              Enterprise architecture and digital integration
            </h1>
            <p>
              Simplify your enterprise architecture with a workload
              modernization and smart migration plan that helps your tech
              investments generate business value.
            </p>
            <ul className=" list-disc pl-4">
              <li>Identify, measure, and address the impact of tech debt.</li>
              <li>
                Control costs, integrate business processes and streamline your
                operations.
              </li>
              <li>
                Design environments that reduce complexity and ensure effective
                implementation plans.
              </li>
            </ul>
          </div>

          <div className=" flex-1">
            <Image
              src="/enterprise.png"
              alt="business "
              width={539}
              height={396}
            />
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4">
            <h1 className=" h1">
              Digital business strategy and transformation
            </h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <ul className=" list-disc pl-4">
              <li>
                Evaluate the current state, envision objectives, and map steps
                to get there.
              </li>
              <li>
                Enable a digital business strategy, streamlining people,
                processes and technology.
              </li>
              <li>
                Improve customer experiences and generate business outcomes.
              </li>
            </ul>

          <div className="py-4">  <Button className="btn ">Boost Productivity And Profitability</Button></div>
          </div>

          <div className=" flex-1">
            <Image
              src="/consultantLight.png"
              alt="business "
              width={539}
              height={396}
            />
          </div>
        </div>

        {/* ------------------------------------------ */}


           {/* ------------------------------------------ */}
           <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4 order-first lg:order-last">
            <h1 className=" h1">
              Digital business strategy and transformation
            </h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <ul className=" list-disc pl-4">
              <li>
                Evaluate the current state, envision objectives, and map steps
                to get there.
              </li>
              <li>
                Enable a digital business strategy, streamlining people,
                processes and technology.
              </li>
              <li>
                Improve customer experiences and generate business outcomes.
              </li>
            </ul>

          <div className="py-4">  <Button className="btn ">Boost Productivity And Profitability</Button></div>
          </div>

          <div className=" flex-1">
            <Image
              src="/consultantIt.png"
              alt="business "
              width={539}
              height={396}
            />
          </div>
        </div>

        {/* ------------------------------------------ */}
      </div>
    </div>
  );
};
