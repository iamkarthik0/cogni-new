import ContactForm from "@/components/shared/contactPage/ContactForm";
import ContactInfo from "@/components/shared/contactPage/ContactInfo";
import React from "react";

const page = () => {
  return (
    <div className=" ">
      <div className="bg-[#0055A7] py-10 lg:py-12 ">
        <h1 className="h1 text-center text-white ">
          Start Your AI Journey with Us. Book a Free Consultation
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-16 lg:py-20">
        <div className=" space-y-8 lg:space-y-9">
          <h1 className=" h1 text-center">
            Let's Create Data-Centric Intelligent Solutions Together
          </h1>

          <p className="text-center text-xl font-light tracking-tight sm:text-2xl md:text-3xl">
            Unlock the Power of Generative AI, NLP, Data Science, and Analytics
            for Your Business
          </p>
        </div>
        {/* ----------------------------form---------------- */}
        <div className="flex flex-col lg:flex-row pt-16 lg:pt-10">
          <div className="lg:w-1/2 ">
            {" "}
            <ContactForm />
          </div>
          <div className="lg:w-1/2 flex items-center order-first lg:order-last ">
            <ContactInfo />
          </div>  
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
