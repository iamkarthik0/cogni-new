import Image from "next/image";
import React from "react";





// const serviceCard = ({heading,paragraph,img,order})=>{

// return(

//     <>
    
    
//     <div className="flex flex-col lg:flex-row  justify-between items-center gap-6">


//         <div className="lg:w-1/2 flex flex-col gap-6 lg:order-2 ">
//             <h1 className=" h1"> Expertise in Latest AI Technologies</h1>
//             <p className=" subtle-text text-left">
//               We work with cutting-edge tools like LLaMA, LangChain, and NL2SQL
//               to build customized solutions that fit your unique requirements
//               and maximize efficiency.
//             </p>
//           </div>
//           <div className=" lg:w-1/2  flex ">
//             <Image
//               src="/serviceso.png"
//               alt="Person using computer with data visualizations"
//               width={539}
//               height={340}
//             />
//           </div>

        
//         </div>
    
    
    
//     </>
// )

// }





const GenerativeAiServices = () => {
  return (
    <div className=" container mx-auto px-4  flex flex-col  pt-16 lg:pt-32 gap-12 lg:gap-20 ">
      <div className=" flex flex-col gap-5 lg:gap-7 ">
        <h1 className="h2 text-center">Our generative AI services offerings</h1>
        <p className="subtle-text text-center">
          Cogninest AI stands out for its expertise and commitment to delivering
          advanced, business-specific generative AI solutions. Here’s why
          partnering with us is the smart choice:
        </p>
      </div>

      <div className=" flex flex-col  gap-8 lg:gap-16  ">
        <div className="flex flex-col lg:flex-row  justify-between items-center gap-6">
          <div className="lg:w-1/2 flex flex-col gap-6 ">
            <h1 className=" h1"> Expertise in Latest AI Technologies</h1>
            <p className=" subtle-text text-left">
              We work with cutting-edge tools like LLaMA, LangChain, and NL2SQL
              to build customized solutions that fit your unique requirements
              and maximize efficiency.
            </p>
          </div>

          <div className=" lg:w-1/2  flex lg:justify-end">
            <Image
              src="/serviceso.png"
              alt="Person using computer with data visualizations"
              width={539}
              height={340}
            />
          </div>
        </div>
    
        
      </div>
    </div>
  );
};

export default GenerativeAiServices;
