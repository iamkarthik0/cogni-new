"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  heading: string;
  paragraph: any;
  link:string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ heading, paragraph,link }) => {

  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group p-6 rounded-lg bg-gray-100 hover:bg-[#0055A7] transition-all duration-300 flex flex-col h-full"
    >
      <motion.h3
        className="text-xl font-semibold mb-4 group-hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {heading}
      </motion.h3>
      <motion.p
        className="mb-4 group-hover:text-white flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {paragraph}
      </motion.p>
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href={link}>
          <Button className="btn group-hover:from-white-500  group-hover:from-[#ffff] group-hover:to-[#ffff]   group-hover:text-[#0055A7] transition-all duration-300">
            EXPLORE MORE
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function DataScienceServices(props: any) {
  const { serviceCard } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Data Science Services
          </motion.h2>
          <motion.p
            className="mt-4 max-w-[85%] text-gray-500 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With our expert data science consulting services, we help
            organizations gain insightful knowledge from unstructured data
            through advanced NLP techniques and AI-powered predictive analytics.
            Our team of proficient data scientists is equipped to tackle novel
            challenges with promptness, specializing in NLP document processing
            among other solutions. This ensures that you communicate with
            technical professionals instead of non-technical sales
            representatives, enabling more accurate and efficient outcomes.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {serviceCard.map((service: any, index: any) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
