"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

interface HeroSectionProps {
  className?: string;
  title?: string;
  paragraph?: any;
  subtitle?: string;
  experienceYears?: number;
  imgUrl: any;
}

const HeroSection: FC<HeroSectionProps> = ({
  title = "Crafting tomorrow, AI today",
  paragraph = "Transform Unstructured and Structured Data into Actionable Insights. Specializing in extracting value from unstructured data like text, images, and documents through advanced AI techniques, including Natural Language Processing (NLP), Machine Learning (ML), Generative AI (Gen AI), and Deep Learning (DL).",
  imgUrl,
  subtitle,
  experienceYears = 12,
}) => {
  const [inView, setInView] = useState(false);

  const { ref, inView: isNowInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => setInView(inView),
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-0" ref={ref}>
      <div className="lg:border-b-2 border-[#00AEEF] container mx-auto justify-between flex flex-col lg:flex-row">
        <motion.div
          className="flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center space-y-2">
            <motion.p
              className="subtle-text font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
            <div className="space-y-5">
              <motion.h1
                className="h1 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {title.split(",").map((part, index) => (
                  <motion.span
                    key={index}
                    className={index === 1 ? "text-[#0055A7] gap-y-2 flex" : ""}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    {part}
                    {index === 0 && (
                      <span className=" ">
                        ,<br />
                      </span>
                    )}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="max-w-[600px] subtle-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {paragraph}
              </motion.p>
            </div>
            <motion.div
              className="gap-2 min-[400px]:flex-row py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="/contact-us">
                <Button className="btn">CONTACT US</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={urlFor(imgUrl).url()}
            width={753}
            height={680}
            alt="hero"
          />
          <motion.div
            className="lg:absolute bottom-0 bg-black lg:w-[50%] lg:p-4 p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.h1
              className="h1 text-white"
              initial={{ scale: 0.5 }}
              animate={{ scale: inView ? 1 : 0.5 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
            >
              {experienceYears}+
            </motion.h1>
            <motion.p
              className="paragraph text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Years of Experience
            </motion.p>
            <motion.p
              className="space-y-2 text-white text-sm w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Pioneering AI solutions that transform businesses. From AI, ML,
              NLP, analytics to Generative AI, we've been at the forefront of
              innovation, turning data into actionable intelligence.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
