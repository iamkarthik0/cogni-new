import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className=" flex flex-col gap-16 lg:gap-20">
        <div className="overflow-hidden flex flex-col lg:flex-row  gap-12">
          <div className=" flex lg:w-1/2 px-4 lg:px0 justify-center items-center w-full lg:order-first order-last ">
            <Image
              src="/who.png"
              alt="who we are"
              height={494}
              width={849}
              className="lg:-translate-x-[50px] "
            />
          </div>
          <div className=" lg:w-1/2 flex  flex-col justify-center text-left px-9 lg:px-16 gap-6">
            <p className=" subtle-text">WHO WE ARE</p>
            <h1 className="h1">We're Cogninest AI...</h1>

            <p className="subtle-text">
              We're dedicated to crafting tomorrow's AI today, solving the most
              challenging business problems with innovative AI and analytics
              solutions...
            </p>
          </div>
        </div>
        {/* ------------second div------------ */}

        <div className="overflow-hidden flex flex-col lg:flex-row  gap-12">
          <div className=" flex lg:w-1/2 px-4 lg:px-0 justify-center items-center w-full order-last ">
            <Image
              src="/whoWe.png"
              alt="who we are"
              height={747}
              width={849}
              className="lg:translate-x-[50px] "
            />
          </div>
          <div className=" lg:w-1/2 flex  flex-col justify-center text-left px-9 gap-6 ">
            <p className=" subtle-text">Our Focus</p>
            <h1 className="h2">Empowering Innovation for a Smarter Tomorrow</h1>

            <p className="subtle-text">
              In a world filled with complexity and constant change, the ability
              to interpret ambiguous signals, think strategically, and act with
              confidence is crucial for businesses and societies to thrive. At
              Cogninest AI, we empower our clients to navigate uncertainty,
              enabling them to move forward with clarity and purpose. We re
              committed to crafting AI solutions that drive innovation and
              create a smarter tomorrow.
            </p>

            <p>
              {" "}
              We push the boundaries of AI and Analytics, not just to solve the
              most challenging problems but to envision new possibilities. By
              identifying the right challenges, questioning the status quo, and
              deeply understanding our clients' needs, we are relentless in our
              pursuit of excellence, innovation, and growth.
            </p>

            <p>
              {" "}
              This is made possible by a workplace culture that fosters
              collaboration, creativity, and the highest standards of
              performance among our world-class technologists and consultants.
            </p>
          </div>
        </div>
      </div>

      {/* ------------Founder section------------ */}
      <div className=" pt-16 lg:pt-24">
        <div className=" max-w-6xl  bg-[#EFF8FF] mx-auto flex px-8 lg:px-16 flex-col lg:flex-row lg:rounded-[50px] ">
          <div className=" lg:w-1/2 order-last lg:order-first flex justify-center lg:justify-start ">
            <Image
              src="/founder.png"
              alt="founder"
              width={400}
              height={428}
              quality={75}
              className="w-auto h-[428px]  aspect-square"
            />
          </div>

          <div className="my-8 lg:w-1/2   flex items-center ">
            <div className="  border-[#000000]  border-l-2 py-6   pl-5">
              <div className=" flex flex-col ">
                <h3 className=" h4">Amol Walunj</h3>
                <div className="flex ">
                  <h4 className=" paragraph justify-start border-b-2 border-[#000000] pb-3 lg:pb-4">
                    Founder of Cogninest AI
                  </h4>
                </div>
              </div>

              <div className=" space-y-3 pt-2">
                <p className=" subtle-text ">
                  Business leaders need to navigate through a lot of complexity,
                  ambiguity, and constraints - a fog of uncertainty. We cut
                  through this fog, using Al & Analytics, enabling businesses to
                  have a clear understanding of implications of the possible
                  paths forward.
                </p>
                <p className=" subtle-text">
                  At Cogninest AI, that's our vision and passion - providing our
                  customers the certainty to move forward with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* ------------Founder section------------ */}



      <div>


        
      </div>
    </>
  );
};

export default WhoWeAre;
