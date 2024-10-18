"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  heading: string;
  paragraph: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ heading, paragraph }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="group p-6 rounded-lg bg-gray-100 hover:bg-[#0055A7] transition-all duration-300 flex flex-col h-full"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl font-semibold mb-4 group-hover:text-white"
      >
        {heading}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4 group-hover:text-white flex-grow"
      >
        {paragraph}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-auto"
      >
        <Button className="btn group-hover:from-white-500  group-hover:from-[#ffff] group-hover:to-[#ffff]   group-hover:text-[#0055A7] transition-all duration-300">
          EXPLORE MORE
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default function DataService(props: any) {
  const { serviceCard } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Your commented out h2 and p elements can go here if needed */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceCard.map((service: any, index: any) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
