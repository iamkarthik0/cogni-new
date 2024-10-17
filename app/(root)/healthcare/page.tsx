import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import Image from "next/image";
import React from "react";

const pase = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        {/* -------------------------------hero-------------- */}
        <h1 className=" h1 max-w-4xl mx-auto text-center  pb-6 pt-10">
          Transformative AI Solutions in Healthcare
        </h1>

        <div className=" w-full aspect-square relative h-[200px] md:h-[300px] lg:h-[499px]">
          <Image src="/healthcare.png" fill alt="health" />
        </div>

        <div className=" space-y-6 pt-8 lg:pt-14">
          <h4 className="h3 text-center">Our Expertise</h4>

          <p className="text-center lg:mx-7">
            With deep industry knowledge, we help businesses thrive in the
            ever-evolving Healthcare and Life Sciences sectors. Our solutions
            and custom data products, powered by AI/ML, Advanced Analytics,
            Generative AI, and Data Engineering, empower clients to achieve
            operational self-sufficiency and drive innovation.
          </p>
          {/* -------------------------------solution-------------- */}
          <h1 className="h1 text-center">Solutions</h1>
        </div>

        <div>
          <div className=" p-12 bg-[#F2F2F2] rounded-[50px] space-y-5 mt-14">
            <h1 className="h3">Healthcare Sales</h1>
            <p className="subtle-text">
              In today’s rapidly evolving healthcare industry, organizations
              must develop sales strategies that drive sustainable value and
              support growth. Our innovative approach leverages
              <span className="font-semibold"> data analytics</span> and AI to
              create custom, transparent solutions that enhance the
              effectiveness of healthcare sales teams and improve field
              engagement by 8x. This empowers healthcare organizations to
              optimize their sales processes, streamline operations, and
              maximize patient and business outcomes.
            </p>
          </div>

          <div className=" p-12 bg-[#F2F2F2] rounded-[50px] space-y-5 mt-14">
            <h1 className="h3">Commercial Marketing</h1>
            <p className="subtle-text">
              Achieving success in the healthcare and life sciences sectors
              demands a highly optimized marketing strategy. At Cogninest AI, we
              harness our analytics expertise to deliver a seamless omnichannel
              experience that enhances patient engagement and maximizes Return
              on Investment (ROI). Our data-driven solutions, including
              <span className="font-semibold">
                {" "}
                Marketing Mix Modeling (MMx), Next Best Action (NBA), field
                suggestions, omnichannel dashboards, and Multi-Touch Attribution
                (MTA) models,
              </span>{" "}
              enable healthcare organizations to double their speed to insights
              and decision-making, empowering them to deliver more impactful
              outcomes.
            </p>
          </div>

          <div className=" p-12 bg-[#F2F2F2] rounded-[50px] space-y-5 mt-14">
            <h1 className="h3">Healthcare Sales</h1>
            <p className="subtle-text">
              Unlocking actionable insights in healthcare requires precise
              analysis of complex data. We leverage cutting-edge
              <span className="font-semibold"> AI/ML</span> techniques to
              enhance critical areas such as
              <span className="font-semibold">
                {" "}
                HCP targeting, prescriber behavior analysis, next-best-action
                (NBA) strategies, value-based care contracting, rare disease
                diagnosis, patient identification, demand forecasting, patient
                flow optimization, and multitouch attribution.
              </span>
              Our solutions enable healthcare organizations to extract maximum
              value from their data, driving better outcomes and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------What is AI for healthcare?-------------- */}

      <div className="flex  flex-col lg:flex-row pt-16 lg:pt-24">
        <div className="lg:w-1/2 space-y-8 ">
          <h1 className="h1">What is AI for healthcare?</h1>
          <p>
            AI for healthcare involves applying advanced algorithms and machine
            learning models to diagnose, predict, and treat medical conditions.
            This technology is a key component of the broader MedTech or
            HealthTech landscape, which also encompasses non-AI innovations in
            healthcare. At Cogninest AI, we harness the power of Natural
            Language Processing (NLP), Computer Vision, and Deep Learning to
            enhance and extend the capabilities of human clinicians. The AI
            revolution is transforming every aspect of healthcare, with
            specialized narrow AI and Strong AI algorithms designed to solve
            specific challenges more efficiently and accurately than ever
            before.
          </p>
        </div>

        <div className="lg:w-1/2 relative aspect-square  h-[437px]">
          <Image src="/aifor.png" alt="aifor" fill className="w-[549px]" />
        </div>
      </div>

      {/* -------------------------------   Why Choose Cogninest AI for Retail?-------------- */}

      <div className=" pt-16">
        <div>
          <h1 className="h1 max-w-4xl">Why Choose Cogninest AI for Retail?</h1>

          <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className=" p-12 bg-[#F2F2F2] rounded-[23px] space-y-5 mt-14">
              <h1 className="h4">AI-Driven Innovation</h1>
              <p className="subtle-text">
                At Cogninest AI, we harness the power of AI/ML and Generative AI
                to deliver innovative, data-driven solutions that revolutionize
                healthcare and life sciences organizations. Our expertise
                transforms data into actionable insights, enabling smarter
                decision-making.
              </p>
            </div>

            <div className=" p-12 bg-[#EEF6FF] rounded-[23px] space-y-5 mt-14">
              <h1 className="h4">Tailored Solutions for Complex Challenges</h1>
              <p className="subtle-text">
                We understand the intricacies of the healthcare sector. Our
                custom-built solutions are designed to address specific
                challenges like HCP targeting, prescriber journeys, and patient
                flow optimization, ensuring that your organization maximizes
                efficiency and outcomes.
              </p>
            </div>

            <div className=" p-12 bg-[#EEF6FF] rounded-[23px] space-y-5 mt-14">
              <h1 className="h4">Proven Impact on Sales and Marketing</h1>
              <p className="subtle-text">
                With a track record of enhancing healthcare sales team
                effectiveness by 8x and doubling the speed to insights in
                marketing, Cogninest AI delivers results that drive growth and
                sustainable value for our clients.
              </p>
            </div>

            <div className=" p-12 bg-[#F2F2F2] rounded-[23px] space-y-5 mt-14">
              <h1 className="h4">End-to-End Data Solutions</h1>
              <p className="subtle-text">
                From Advanced Analytics to value-based care strategies, we
                provide an integrated suite of AI-powered solutions that improve
                operational self-sufficiency, enabling healthcare organizations
                to stay ahead in a fast-evolving market.
              </p>
            </div>

            <div className=" p-12 bg-[#F2F2F2] rounded-[23px] space-y-5 mt-14">
              <h1 className="h4">Commitment to Innovation and Excellence</h1>
              <p className="subtle-text">
                Our AI-driven solutions are not just cutting-edge—they’re
                scalable, transparent, and designed to empower healthcare
                organizations with the tools they need to thrive in a
                competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-16">
        <BlogsAndUseCases />
      </div>

      <div className="py-12 lg:py-24">
        <ContactCard />
      </div>
    </div>
  );
};

export default pase;
