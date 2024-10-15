import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="group p-6 rounded-lg bg-gray-100 hover:bg-[#0055A7] transition-all duration-300 flex flex-col h-full">
    <h3 className="text-xl font-semibold mb-4 group-hover:text-white">{title}</h3>
    <p className="mb-4 group-hover:text-white flex-grow">{description}</p>
    <div className="mt-auto">
      <Button 
        className="btn group-hover:from-white-500  group-hover:from-[#ffff] group-hover:to-[#ffff]   group-hover:text-[#0055A7] transition-all duration-300"
      >
        EXPLORE MORE
      </Button>
    </div>
  </div>
)

export default function DataScienceServices() {
  const services = [
    {
      title: "NLP (Natural Language Processing)",
      description: "We specialize in transforming unstructured data into actionable insights through advanced NLP techniques. Our services include sentiment analysis, text summarization, named entity recognition (NER), language translation, and chatbot development, enhancing your communication strategies and automating customer interactions."
    },
    {
      title: "Generative AI",
      description: "Drive innovation with our Generative AI services, including text generation, AI content creation, image synthesis, video generation, and personalized marketing automation. We implement cutting-edge AI models to deliver customized solutions that enhance efficiency and creativity, helping businesses scale their content strategies."
    },
    {
      title: "Machine Learning",
      description: "Empower your organization with our comprehensive machine learning solutions. We provide predictive analytics, recommendation systems, anomaly detection, and classification algorithms tailored to optimize business processes. Our data-driven models enable precise forecasting, automation, and intelligent decision-making for sustained growth."
    },
    {
      title: "Computer Vision",
      description: "Streamline document management and automate workflows with our specialized computer vision services. We focus on Intelligent Document Processing (IDP), data extraction from documents like invoices and forms, image recognition, and object detection. Our solutions ensure accurate data validation and management, improving operational efficiency and accuracy."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data Science Services</h2>
          <p className="mt-4 max-w-[85%] text-gray-500 md:text-xl">
            With our expert data science consulting services, we help organizations gain insightful knowledge from unstructured data through advanced NLP
            techniques and AI-powered predictive analytics. Our team of proficient data scientists is equipped to tackle novel challenges with promptness,
            specializing in NLP document processing among other solutions. This ensures that you communicate with technical professionals instead of
            non-technical sales representatives, enabling more accurate and efficient outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}