import { Button } from "@/components/ui/button";
import { genAIQuery, landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import GenerativeAiServices from "@/components/shared/genAiPage/GenerativeAiServices";
import DataService from "@/components/shared/genAiPage/DataService";
import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import GenAIHero from "@/components/shared/genAiPage/GenAIHero";
import MediaCard from "@/components/layout/MediaCard";

const page = async () => {
  const card = [
    {
      heading: "Large Language Models (LLMs)",
      paragraph:
        "Integrate industry-leading models like Chat GPT models, LLaMA, and Falcon for applications such as text generation, natural language understanding, summarization, and sentiment analysis, tailored to your business needs.",
    },
    {
      heading: "Model Fine-Tuning",
      paragraph:
        "Utilize cutting-edge fine-tuning techniques such as LoRA (Low-Rank Adaptation) and QLoRA to adapt AI models for specific tasks, ensuring high precision and relevance.",
    },
    {
      heading: "NL2SQL Automation",
      paragraph:
        "Transform raw data into actionable insights by automating SQL query generation through NL2SQL, streamlining database management and reporting.",
    },
    {
      heading: "Retrieval-Augmented Generation (RAG)",
      paragraph:
        "Implement LangChain and LlamaIndex for advanced data retrieval and semantic search capabilities, enhancing knowledge management and improving customer interaction outcomes.",
    },
    {
      heading: "Stability AI Models",
      paragraph:
        "Apply Stability AI for visual content generation, enabling businesses to create marketing visuals, product designs, and other digital media assets with AI-powered creativity.",
    },
    {
      heading: "Cloud-Powered AI Infrastructure",
      paragraph:
        "We utilize a comprehensive suite of AWS (Bedrock, S3, EC2, SageMaker, Lambda, ECR, RDS) and Azure services to build scalable, secure AI-driven applications, ensuring your business stays ahead with cutting-edge, cloud-powered AI solutions.",
    },
  ];
  const data = await client.fetch(genAIQuery);
  const result = await client.fetch(landingQuery);

  return (
    <div className=" w-full h-full">
      <div className=" container  mx-auto px-4 sm:px-6 lg:px-8  ">
        <GenAIHero />
        <div className=" pt-16 lg:pt-32">
          <div className=" space-y-8 text-center">
            <h1 className=" h2">Explore more services</h1>
            <MediaCard services={{card}} />
          </div>
        </div>

        <div>
          <GenerativeAiServices data={data.aiServices} />
        </div>

        <div>
          <DataService serviceCard={result.services.ServicesCard} />
        </div>
      </div>

      <BlogsAndUseCases />
      <div className="pt-12 lg:py-24">
        <ContactCard />
      </div>
    </div>
  );
};

export default page;
