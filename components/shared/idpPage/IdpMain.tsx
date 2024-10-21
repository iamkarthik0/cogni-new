import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdpMain = () => {
  return (
    <div>
      <div className=" space-y-16">
        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row gap-6">
          <div className=" flex-1 space-y-4">
            <h1 className=" h1">Generative AI for Documents</h1>
            <p>
              Solve document automation challenges using the latest Large
              Language Models (LLMs). Customize AI models and applications using
              your data faster than ever before.
            </p>
          </div>

          <div className=" flex-1">
            <Image src="/idp1.png" alt="business " width={539} height={396} />
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4 order-first lg:order-last">
            <h1 className=" h1">Industry-Leading Results</h1>
            <p>
              Cogninest AI IDP breaks down complex processing tasks into simpler
              ones. Each task is routed to the best AI, human, or software
              worker for optimal results.
            </p>
          </div>

          <div className=" flex-1">
            <Image src="/idp2.png" alt="business " width={539} height={396} />
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row gap-6">
          <div className=" flex-1 space-y-4">
            <h1 className=" h1">Automatic Automation</h1>
            <p>
              Results from human, AI, and software workers are combined into a
              unified output. New AI workers are continuously deployed to
              increase automation rates.
            </p>
          </div>

          <div className=" flex-1">
            <Image src="/idp3.png" alt="business " width={539} height={396} />
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* ------------------------------------------ */}
        <div className=" relative flex  flex-col lg:flex-row">
          <div className=" flex-1 space-y-4 order-first lg:order-last">
            <h1 className=" h1">Guaranteed Outcome</h1>
            <p>
              Users define desired quality, cost, and speed, then the platform
              automatically selects the right combination of AI, human, and bot
              workers to guarantee results.
            </p>
          </div>

          <div className=" flex-1">
            <Image src="/idp4.png" alt="business " width={539} height={396} />
          </div>
        </div>

        {/* ------------------------------------------ */}
      </div>

      <div className=" pt-16 lg:pt-32">
        <div className=" px-6 lg:px-14 py-10 flex lg:flex-row flex-col bg-[#1B255E] rounded-[28px] gap-8 ">
          <div className="lg:w-1/2 space-y-4 flex flex-col  justify-center     ">
            <h1 className=" h2 text-white">
              Get a customized demo with your documents
            </h1>
            <p className=" paragraph text-white">
              {" "}
              Book a free consultation with our experts.
            </p>

            <Link href="contact-us ">
              <Button className="btn my-4">Schedule Demo</Button>
            </Link>
          </div>
          <div className=" lg:w-1/2 h-[336px] bg-[#26337A]  rounded-[28px]">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdpMain;
