import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import FeatureCard from "@/components/layout/FeatureCard";
import RetailHero from "@/components/shared/retailPage/RetailHero";
import RetailStrategy from "@/components/shared/retailPage/RetailStrategy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const features = [
    {
      title: "Proven Track Record",
      description:
        "With a portfolio of successful projects across the retail sector, Cogninest AI has consistently delivered measurable results. From boosting sales and enhancing customer engagement to optimizing supply chains, our solutions have transformed businesses and driven growth.",
      variant: "gray",
    },
    {
      title: "Tailored Strategies for Every Business",
      description:
        "We understand that every retail business is unique. That’s why we offer customized AI solutions that align with your specific goals, whether it’s improving in-store experiences, optimizing e-commerce platforms, or enhancing operational efficiency.",
      variant: "blue",
    },
    {
      title: "End-to-End Support",
      description:
        "Our commitment doesn’t end at implementation. Cogninest AI provides comprehensive support and training to ensure that your team can fully leverage our solutions. We work closely with your team to monitor performance, make necessary adjustments, and continuously improve outcomes.",
      variant: "blue",
    },
    {
      title: "Innovation at the Core",
      description:
        "We stay ahead of the curve by integrating the latest AI advancements into our offerings. Whether it’s deploying cutting-edge NLP models or incorporating AR for enhanced customer engagement, Cogninest AI ensures your business benefits from the most innovative technologies available.",
      variant: "gray",
    },
    {
      title: "Comprehensive Data Security",
      description:
        "We prioritize the security of your data. Our solutions are designed with robust security protocols to ensure that all sensitive information is protected, giving you peace of mind while driving your business forward.",
      variant: "gray",
    },
    {
      title: "Collaborative Approach",
      description:
        "We believe in working as an extension of your team. From the initial consultation to post-deployment support, we collaborate closely to ensure that our solutions not only meet but exceed your expectations.",
      variant: "blue",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <RetailHero />
          <div className=" space-y-5  pt-16 lg:pt-20  paragraph ">
            <p>
              Cogninest AI's integrated solution architecture captures the
              intricate dynamics of pricing, merchandising, category management,
              and more. Our approach empowers clients to take full ownership of
              their data intelligence while fostering self-sufficiency in
              optimizing their retail operations through highly personalized
              experiences.
            </p>
            <p>
              With scalable, explainable frameworks, our solutions seamlessly
              integrate both digital and traditional retail strategies, enabling
              retailers to effectively manage complex product assortments and
              drive growth in a competitive market.
            </p>
          </div>
        </div>

        {/* ------------------------------retail strategy----------------- */}

        <div className=" pt-16 lg:pt-24">
          <h2 className="h2 ">
            Discover how our expertise can transform your retail strategy and
            propel your brand to new heights.
          </h2>
          <div className=" pt-8 lg:pt-14">
            <RetailStrategy />
          </div>
        </div>

        {/* ------------------------------Growth----------------- */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12  pt-16 lg:pt-24">
          <h4 className=" paragraph text-[#0055A7] font-semibold text-center">
            Generative AI
          </h4>
          <h1 className="text-center h2 max-w-5xl mx-auto ">
            Revolutionize Your Business Growth with GenAI
          </h1>
          <div className=" w-full aspect-square relative h-[220px] md:h-[320px] lg:h-[516px]">
            <Image src="/cpg-growth.png" fill alt="health" />
          </div>
        </div>
        {/* -------------------------------why choose ----------------------------- */}
        <div className=" py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className=" h2 pb-16 ">Why Choose Cogninest AI? </h1>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((data, index) => (
                <>
                  <FeatureCard
                    key={index}
                    variant={data.variant}
                    title={data.title}
                    description={data.description}
                  />
                </>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------let us solve---------------- */}

        <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center lg:max-w-5xl mx-auto my-10 lg:my-16  ">
          <div className="space-y-6">
            <h2 className="h3  mx-auto w-3/4">
              Ready to Transform Your Retail Business?
            </h2>
            <p className=" paragraph lg:mx-6">
              Whether you’re looking to enhance customer experiences, optimize
              operations, or gain deeper insights into your business, Cogninest
              AI is your partner in retail innovation. Contact us today to
              schedule a consultation and discover how we can help you achieve
              your goals.
            </p>
            <Link href="/contact-us">
              <Button className="btn text-center text-wrap py-7 lg:py-0 my-7">
                Contact us today to start your transformation journey!
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <BlogsAndUseCases />
        </div>

        <div>
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default page;
