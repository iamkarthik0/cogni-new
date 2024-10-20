import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DocumentHero = () => {
  return (
    <div>
      <div className=" flex  flex-col  lg:flex-row gap-6">
        <div className="flex justify-center flex-col  lg:max-w-1/2  space-y-5 pt-8 lg:pt-0">
    
          <h1 className=" h1 lg:max-w-2xl">
            {" "}
            Empower Your Business with our Cutting-Edge Document Intelligence
          </h1>
          <p>
            Streamline and automate complex document processing with Document
            Intelligence
          </p>
          <Link href="contact-us">
            {" "}
            <Button className="btn">Lets Talk</Button>{" "}
          </Link>
        </div>

        <div className=" lg:max-w-1/2">
          <Image
            src="/documentHero.png"
            alt="finance"
            width={496}
            height={400}
          />
        </div>
      </div>

      <div className=" space-y-8 lg:space-y-16 pt-8 lg:pt-16">
        <p className="subtle-text text-center">
          Forms and documents are essential tools for organizations to manage
          operations and gather critical business data. However, the manual
          processing of these documents can be time-consuming and repetitive.
          With Intelligent Document Processing (IDP), AI can automate the
          extraction of vital information from various sources, streamlining
          routine business operations. By leveraging AI for data extraction,
          organizations can focus on the most important details, prioritize
          tasks, and deliver high-quality services more efficiently and
          effectively.
        </p>

        <h1 className=" h1 text-center">About Document AI</h1>

        <p className=" subtle-text text-center">
          The process of scanning an image and generating a digital
          representation of the document so that people may engage with its
          content in different ways is known as document processing. Optical
          character recognition, natural language processing, handwritten text
          recognition, text extraction, and other machine learning disciplines
          are used in document artificial intelligence (AI) to validate data,
          analyze documents, and assist people in meaningfully extracting
          information from them.
        </p>
        <p className="  font-medium text-[#0055A7] text-center">
          Gathers information from many sources more quickly and easily by using
          sophisticated character recognition and AI-powered text data analysis
          to extract data from forms and unstructured text. This information is
          needed to carry out a range of business operations
        </p>
      </div>
    </div>
  );
};

export default DocumentHero;
