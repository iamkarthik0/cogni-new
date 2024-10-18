"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function DataScienceConsulting(props:any) {
  const {heading, paragraph, card} = props.services;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:py-24" ref={ref}>
      <motion.h1 
        className="h2 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h1>
      <motion.p 
        className="text-center mb-12 subtle-text max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {paragraph || ""}
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {card.map((service:any, index:any) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card 
              className={`group bg-[#D9D9D9] hover:bg-[#0055A7] transition-all duration-300 ease-in-out cursor-pointer rounded-none h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">{service.heading}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm group-hover:text-white transition-colors duration-300 ease-in-out">{service.paragraph}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}