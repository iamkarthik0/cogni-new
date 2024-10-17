import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MarketingMixSection = () => {
  const features = [
    "Optimized Marketing Mix Analysis",
    "Optimized Pricing and Promotion Solutions",
    "Advanced Product Assortment & Distribution Solutions for CPG Success",
    "Maximize Revenue with Proactive Revenue Growth Management (RGM)",
    "Shopper Insights, Customer Segmentation, and Targeting",
    "Demand Forecasting",
    "Supply Chain and Inventory Management",
  ];

  return (
    <div className="bg-blue-50 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Features list */}
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600  group cursor-pointer"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-black  flex-shrink-0" />
                  <span className="text-sm md:text-base leading-relaxed group-hover:text-black">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Blue card */}
          <div className="lg:w-1/2"> 
            <Card className="bg-[#0766C2] text-white h-full py-10 rounded-[23px]">
              <CardContent className="p-6 lg:p-8 flex flex-col gap-6">
                <p className="text-sm md:text-base leading-relaxed">
                  Marketing Mix Modeling (MMM) is essential for accurately
                  assessing and planning promotional strategies. We assist
                  consumer products businesses to cut growth costs by enhancing
                  the return on investment (ROI) from their marketing spend. By
                  considering both short- and long-term effects of marketing
                  investments, our integrated model captures synergies across
                  omnichannel and offline platforms. Using a dynamic optimizer,
                  we analyze multiple business scenarios and develop optimal
                  solutions based on the enterprise context.
                </p>
                <div>
                  <Button
                    variant="secondary"
                    className="bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors"
                  >
                    LET'S TALK
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingMixSection;
