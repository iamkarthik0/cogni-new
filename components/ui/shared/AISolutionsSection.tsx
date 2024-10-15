"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AISolutionsSection() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="h2">
              We deliver AI solutions powered by AWS and azure!
            </h1>
            <p className="subtle-text">
              Extracting value from unstructured and structured data with
              advanced AI techniques, including text classification, NLP,
              Generative AI, and LLMs. Our solutions also cover predictive
              modeling and big data analytics.br<br></br>
              We extensively leverage AWS (Bedrock, S3, EC2, SageMaker,
              Lambda, EKS, RDS) and Azure to build scalable, secure AI-
              driven applications, ensuring your business stays ahead with
              cutting-edge cloud-powered AI solutions.
            </p>
         
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className='btn'>EXPLORE MORE</Button>
            </div>
          </div>
          <div className="flex-shrink-0 mt-8 lg:mt-0 lg:w-[400px] xl:w-[600px]">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/aisolution.png"
                alt="People using VR headsets with holographic displays"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}