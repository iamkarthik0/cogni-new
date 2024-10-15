import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  heading: string;
  paragraph: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ heading, paragraph }) => (
  <div className="group p-6 rounded-lg bg-gray-100 hover:bg-[#0055A7] transition-all duration-300 flex flex-col h-full">
    <h3 className="text-xl font-semibold mb-4 group-hover:text-white">
      {heading}
    </h3>
    <p className="mb-4 group-hover:text-white flex-grow">{paragraph}</p>
    <div className="mt-auto">
      <Button className="btn group-hover:from-white-500  group-hover:from-[#ffff] group-hover:to-[#ffff]   group-hover:text-[#0055A7] transition-all duration-300">
        EXPLORE MORE
      </Button>
    </div>
  </div>
);

export default function DataScienceServices(props: any) {
 
  const {serviceCard} = props


  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Data Science Services
          </h2>
          <p className="mt-4 max-w-[85%] text-gray-500 md:text-xl">
            With our expert data science consulting services, we help
            organizations gain insightful knowledge from unstructured data
            through advanced NLP techniques and AI-powered predictive analytics.
            Our team of proficient data scientists is equipped to tackle novel
            challenges with promptness, specializing in NLP document processing
            among other solutions. This ensures that you communicate with
            technical professionals instead of non-technical sales
            representatives, enabling more accurate and efficient outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCard.map((service:any, index:any) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
