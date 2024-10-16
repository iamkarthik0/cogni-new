import Image from "next/image";
import React from "react";

const MlExpert = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-6">
        <div className=" lg:w-2/3  flex ">
          <Image
            src="/serviceso.png"
            alt="Person using computer with data visualizations"
            width={759}
            height={494}
          />
        </div>
        <div className={`lg:w-1/3 flex flex-col gap-6  order-first lg:order-2   `}>
          <h1 className=" h3 ">
            {" "}
             Custom ML Services Tailored To Your Unique Business Needs:
          </h1>
          <p className=" subtle-text text-left pl-5">
            <ul className="list-disc">
              <li>develop and deploy custom modes</li>
              <li>automate repetitive tasks</li>
              <li>uncover patterns and trends</li>
              <li>generating actionable insights for informed decision-making.</li>
            
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MlExpert;
