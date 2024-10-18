import Image from "next/image";
import React from "react";

const CustomMlService = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-6">
        <div className={`lg:w-1/2 flex flex-col gap-6    `}>
          <h1 className=" h1 text-left">
            {" "}
            Custom ML Services Tailored To Your Unique Business Needs:
          </h1>
          <p className=" subtle-text text-left">
          Cogninest AI offers machine learning applications that may be customized to meet the unique needs of your business. Using the power of artificial intelligence and predictive modeling, our machine learning as a service helps companies maximize accuracy and productivity.
          </p>
        </div>
        <div className=" lg:w-1/2  flex ">
          <Image
            src="/serviceso.png"
            alt="Person using computer with data visualizations"
            width={539}
            height={340}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomMlService;
