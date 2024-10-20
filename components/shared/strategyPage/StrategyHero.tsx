import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const StrategyHero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <div className=" flex flex-col lg:flex-row gap-4">
          <div className=" lg:max-w-2/3 flex   items-center  flex-1 order-last lg:order-first">
            <Image
              src="/strategyHer.png"
              alt="strategy"
              width={467}
              height={501}
            />
          </div>

          <div className=" flex-1 flex   items-center">
            <div className=" lg:space-y-8 p-8 lg:p-0 space-y-5 ">
              <p>We will provide</p>
              <h1 className=" h1 lg:max-w-2xl">
                Artificial Intelligence Strategy
              </h1>
              <p className=" lg:max-w-xl">
                Building roadmaps for the adoption and implementation of
                artificial intelligence & machine learning for global
                enterprises
              </p>
              <Button className="btn">REQUEST FOR PROPOSAL</Button>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-8 lg:p-16 space-y-8 ">
        <h1 className=" h1">  
          Artificial Intelligence & Machine Learning Strategy
        </h1>

        <div className=" flex flex-col lg:flex-row w-full overflow-hidden space-y-8 lg:space-y-0">
          <div className="space-y-3 lg:max-w-xl  ">
            <p>
              At Cogninest AI, we specialize in partnering with businesses to
              craft tailored AI integration strategies that accelerate your
              digital transformation. Our AI integration services are designed
              to seamlessly blend cutting-edge AI technologies with your
              existing systems, whether it's software or a multi-platform
              application. By focusing on both short-term wins and long-term
              growth, we ensure that your organization reaps the full benefits
              of AI adoption. Our team of experts meticulously aligns AI
              solutions with your business processes, driving innovation and
              efficiency across the board.
            </p>
            <p>
              We empower stakeholders to take advantage of guided decision
              making and an aerial view of the effect, risks, possibilities, and
              limits in current systems by employing a comprehensive AI
              strategy. Decision-makers can collaborate with a reputable AI
              development company to fully realize the potential of technical
              advancement, including effective AI model deployment. Give us a
              call to talk about your requirements or to schedule a free AI
              strategy consultation with Cogninest AI.
            </p>
          </div>

          <div className="    md:translate-x-8  ">
            <div className="p-8 lg:p-14 rounded-[23px] md:rounded-[52px] space-y-5 bg-[#D9D9D9] lg:translate-x-10 ">
              <h1 className=" h1">Ready to discuss your requirements?</h1>
              <p>Get in touch and let us know how can we help..</p>
              <Button className="btn">
                Let's Start Discuss About Project{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyHero;
