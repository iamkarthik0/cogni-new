import Image from "next/image";
import React from "react";

const TransformBusiness = () => {
  return (
    <div className=" space-y-16 ">
      <div className=" space-y-14">
        <h1 className=" h1 ">Transform Business Operations with Document AI</h1>
        <p className=" subtle-text">
          Using Cogninest Document AI, businesses can decrease workflow
          redundancies and free up staff to concentrate on higher-value work by
          extracting insights from massive amounts of documents. This technology
          automates low-level, repetitive processes, transforming the way
          businesses operate today. This frees up more time for people to
          concentrate on delivering tailored client experiences and carrying out
          more effective company processes. By combining the capabilities of AI
          with human experience knowledge, Cogninest Document AI accelerates
          impact and provides machine learning value across business lines
        </p>
      </div>

      <div className=" flex flex-col lg:flex-row gap-20">
        <div className=" space-y-6">
          <Image
            src="/transformData.png"
            alt="transform"
            width={431}
            height={259}
          />
          <div>
            <h4 className=" h3">Data Scientists</h4>
            <p>
              Pipelines, personalized models, self-supervised learning, and
              process intelligence are all provided by Cogninest Document AI.
              Choose a data collection including PDFs or photos, provide your
              own labels, or utilize our labeling procedures. REST APIs are used
              to access document intake, processing, training, and scoring; this
              facilitates seamless integration of the service with current
              systems. The flat JSON files used for scoring outputs from
              Cogninest Document AI are also accessible through an API.
            </p>
          </div>
        </div>

        <div className=" space-y-6">
          <Image
            src="/businessUser.png"
            alt="transform"
            width={431}
            height={259}
          />
          <div>
            <h4 className=" h3">Business Users</h4>
            <p>
              The majority of businesses have a vast amount of papers that are
              necessary for daily operations. H2O Document AI assists business
              users in focusing on the sections of each document that are
              pertinent to their workflows, enabling them to swiftly and
              correctly extract the critical information required to finish
              crucial activities. By automating low-level operations, H2O
              Document AI decreases redundancy and boosts productivity, freeing
              up users to focus on higher-value work and provide superior
              services more successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformBusiness;
