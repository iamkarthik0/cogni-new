import Image from "next/image";
import React from "react";

const DnaCard = () => {
  return (
    <> 
      <div className="px-6 pt-10 space-y-10 pb-6 bg-[#D9D9D9] hover:bg-[#0055A7] hover:text-white">
 <div className="flex justify-center">
 <div className="  space-y-3">
          <h4 className="h4">An ownership mindset</h4>
          <p>
            The entrepreneurial streak that started our journey continues to
            shape our thinking and decision making. Our teams operate with
            flexibility and autonomy, but are highly accountable. This has
            helped us nurture some of the industry’s best teams and leaders.
          </p>
        </div>
 </div>

       <div className="w-full ">
       <Image src="/our.png" alt="our" width={555} height={234} className="w-full" />
       </div>
      </div>
    </>
  );
};

const OurApproach = () => {
  return (
    <div>
      <div className=" space-y-5">
        <p className=" subtle text">OUR APPROACH</p>

        <h1 className=" h1">The Cogninest DNA</h1>

        <p>
          In our quest to craft tomorrow’s AI today, we are constantly evolving.
          While industry best practices are important, true innovation and
          exceptional value come from pushing boundaries in every direction.
          This is made possible by assembling teams with a powerful mix of
          mindset and expertise—an ownership mentality, a forward-thinking
          vision, deep technical knowledge, and a fearless approach to
          experimentation. We call this the Cogninest DNA.
        </p>
      </div>
      <div className=" pt-5 grid  grid-cols-1 lg:grid-cols-2 gap-8">


      <DnaCard/>
      <DnaCard/>
      <DnaCard/>
      <DnaCard/>
      </div>
    </div>
  );
};

export default OurApproach;
