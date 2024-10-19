import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className=" space-y-10 lg:space-y-24">
      <h1 className="h1 text-center">Why Choose Cogninest AI for Energy</h1>

      <div className=" flex flex-col lg:flex-row gap-6">
        {/* ------------------- */}
        <div className="lg:w-1/2 space-y-6">
          {/* ------------------- */}
          <div className="space-y-4">
            <h4 className="h4">Tailored AI Solutions</h4>
            <p>
              We develop customized AI models that address the unique challenges
              of the energy sector, from asset integrity to grid optimization.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="h4">End-to-End Integration</h4>
            <p>
              Our solutions integrate seamlessly with existing infrastructure,
              ensuring minimal disruption and maximum impact.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="h4">Data-Driven Decisions</h4>
            <p>
              We leverage advanced analytics to provide actionable insights that
              drive better decision-making and operational efficiency.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="h4">Sustainability Focused</h4>
            <p>
              Cogninest AI is committed to helping energy companies achieve
              their sustainability goals through innovative AI solutions that
              optimize renewable energy and reduce emissions.
            </p>
          </div>
        </div>
        {/* ------------------- */}

        <div className="lg:w-1/2">
          <Image src="/energy-light.png" alt="light" width={652} height={559} />
        </div>
      </div>

      <h1 className="h4 text-[#0055A7] text-center">
        “Cogninest AI’s predictive maintenance solution has significantly
        reduced our operational costs and improved the reliability of our grid
        infrastructure. Their innovative approach is transforming the way we
        manage energy.”
      </h1>
    </div>
  );
};

export default WhyChoose;
