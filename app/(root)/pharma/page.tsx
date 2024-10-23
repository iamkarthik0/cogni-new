import BlogCard from "@/components/shared/dataEngineering/BlogCard";
import PharmaHero from "@/components/shared/pharma/PharmaHero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        
      <PharmaHero/>
        {/* ------------------------------let us solve---------------- */}

        <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center max-w-5xl mx-auto my-10 lg:my-16  ">
          <div className="space-y-6">
            <h2 className="h3  mx-auto w-3/4">
              Let us solve your impossible problem
            </h2>
            <p className=" paragraph lg:mx-8">
              Speak to one of our industry specialists about how Artificial
              Intelligence can help solve your impossible problem
            </p>
            <Link href="/contact-us">
            <Button className="btn my-4  ">CONTACT US</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
