"use client"
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BlogsAndCaseStudies(props: any) {
  const { cards, title } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((post: any, index: any) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-none overflow-hidden rounded-none">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                  <Image
                    src={urlFor(post.image).url()}
                    alt="title"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-[50%] absolute bottom-0 left-0 right-0 bg-[#0055A7] text-white px-2 py-1 text-xs">
                    Technology
                  </div>
                </div>
                <CardContent className="p-4 sm:w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{post.name}</span>
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.heading}</h2>
                  <p className="text-sm">{post.paragraph}</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
