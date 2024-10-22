"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MediaCard(props: any) {
  const { card } = props.services;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((service: any, index: any) => (
          <motion.div
            key={index}
            ref={ref}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            <Card
              key={index}
              className={`group bg-[#D9D9D9]  hover:bg-[#0055A7] transition-all duration-300 ease-in-out cursor-pointer rounded-none`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                  {service.heading}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm group-hover:text-white transition-colors duration-300 ease-in-out">
                  {service.paragraph}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
