import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const ServiceCard = ({ paragraph, heading, image }) => (
  <div className="bg-white overflow-hidden">
    <div className="relative h-48">
      <Image
        src={urlFor(image).url()}
        alt={heading}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4">
      <h3 className="h4 mb-2">{heading}</h3>
      <p className="text-sm text-gray-600">{paragraph}</p>
    </div>
  </div>
);

const DsServices = (props:any) => {
  const { title, ServicesCard } = props.data;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-center h2">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-24 gap-6">
        {ServicesCard.map((service:any, index:any) => (
          <ServiceCard
            key={index}
            image={service.image}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default DsServices;
