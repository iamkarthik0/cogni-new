import BlogsCards from "@/components/shared/blogPage/BlogsCard";
import { Button } from "@/components/ui/button";

import React from "react";

const page = () => {
  return (
    <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
      {/* --------------------------hero---------------- */}
      <div className=" pt-16 lg:pt-24">
    
<div className=" text-center max-w-2xl mx-auto space-y-6">
        <p className="subtle-text font-semibold"> COGNINEST AI NEWS</p>
        <h1 className="h1">Grow your business with AI and NLP</h1>
      </div>
</div>

      {/* --------------------------card---------------- */}
    <div className=" pt-16 lg:pt-24">
    <BlogsCards />
    </div>

      {/* -------------------------Why Choose us Section ---------------- */}

      <div className=" pt-16 lg:pt-24  pb-8 lg:pb-16">
        <div className="py-16 lg:py-24 text-center  bg-[#F2F2F2] max-w-5xl mx-auto rounded-[50px]  space-y-8 h2 ">
          <h1 className="w-3/4 text-center mx-auto">
            Transform Unstructured Data into Actionable Insights
          </h1>

          <div>
            <Button className="btn">CONTACT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
