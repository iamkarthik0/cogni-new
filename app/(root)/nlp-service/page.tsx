import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import MediaCard from "@/components/layout/MediaCard";
import NlpHero from "@/components/shared/nlpPage/NlpHero";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

const page = async () => {

  const card = [
    {
      heading: "Sentiment Analysis",
      paragraph:
        "Determine the emotional tone behind text by classifying it as positive, negative, or neutral, enabling better understanding of opinions and attitudes in content...",
    },
    {
      heading: "Semantic search",
      paragraph:
        "By applying natural language processing (NLP) techniques to search queries, enable apps to do deep searches by gaining insight into the user's intent and context.",
    },
    {
      heading: "Speech Recognition ",
      paragraph:
        "Our voice recognition system accurately transcribes and interprets spoken language by utilizing state-of-the-art machine learning algorithms.",
    },
    {
      heading: "Information Extraction",
      paragraph:
        "Emails, social media postings, PDF documents, and other semi-structured or unstructured documents may all have structured information extracted from them.",
    },
    {
      heading: "Machine translation",
      paragraph:
        "Automatically translates across languages without altering the supplied text's meaning.",
    },
    {
      heading: "Control spamming",
      paragraph:
        "We develop spam detectors to manage spamming by utilizing NLP algorithms and text classification.",
    },
    {
      heading: "Emotional meaning",
      paragraph:
        "Categorizes feelings that are concealed in messages from websites, applications, emails, social media, and other sources.",
    },
    {
      heading: "Summarization",
      paragraph:
        "Identify relevant keywords and condense lengthy papers to alleviate information overload.",
    },
    {
      heading: "Question answering",
      paragraph:
        "With intelligent chatbots, get relevant answers to questions asked by humans in natural language.",
    },
    {
      heading: "Text Classification",
      paragraph:
        "Automatically categorize text into predefined labels or topics, such as spam detection, document categorization, or sentiment labeling, enhancing content organization and analysis.", 
    },
    {
      heading: "Topic modelling",
      paragraph:
        "Automatically uncover and group related themes or topics within large text datasets, helping to identify underlying patterns, trends, and insights in unstructured content.",
    },
    
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <NlpHero/>
        {/* ---------------------------Hero Section--------------------- */}

        <div className=" flex flex-col gap-8  text-left lg:pt-14">
          <h1 className=" h2">
            Convert your unstructured data into insights with NLP techniques...
          </h1>
          <p className=" subtle-text">
            Using a blend of linguistics, machine learning, and AI natural
            language processing, Cogninest AI provides services for natural
            language processing. You may include NLP skills into your software
            applications with the assistance of our staff. This will let you
            quickly handle papers and get rid of complexity through NLP document
            processing. Your company may create a next-generation digital
            assistant that is contextually relevant, speaks human language, and
            makes smarter judgments by utilizing our NLP knowledge.
          </p>
          <div>
            <Button className=" btn">Lets start a project</Button>
          </div>

          <div className=" flex  justify-center items-center">
            <Image src="/convert.png" alt="convert" width={1149} height={100} />
          </div>
        </div>

        {/* ---------------------------Second Section--------------------- */}
      </div>

      {/* ---------------DataScienceConsulting Component--------------- */}

      <div className=" pt-10 lg:pt-16">
          <h1 className="h3 text-center">Best Services for Manufacturing</h1>
          <div>
            <MediaCard services={{card}} />
          </div>
        </div>

      <div className="pt-12 lg:pt-24">
        <BlogsAndUseCases />
      </div>

      <div className="pt-12 lg:py-24">
        <ContactCard />
      </div>
    </>
  );
};

export default page;
