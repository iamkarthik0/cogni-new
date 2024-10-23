"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DocumentHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
      <motion.div className="flex flex-col lg:flex-row gap-6" variants={itemVariants}>
        <div className="flex justify-center flex-col lg:max-w-1/2 space-y-5 pt-8 lg:pt-0">
          <motion.h1 className="h1 lg:max-w-2xl" variants={itemVariants}>
            Empower Your Business with our Cutting-Edge Document Intelligence
          </motion.h1>
          <motion.p variants={itemVariants}>
            Streamline and automate complex document processing with Document
            Intelligence
          </motion.p>
          <Link href="contact-us">
            <motion.div variants={itemVariants}>
              <Button className="btn">Lets Talk</Button>
            </motion.div>
          </Link>
        </div>

        <div className="lg:max-w-1/2">
          <Image
            src="/documentHero.png"
            alt="finance"
            width={496}
            height={400}
          />
        </div>
      </motion.div>

      <motion.div className="space-y-8 lg:space-y-16 pt-8 lg:pt-16" variants={containerVariants}>
        <motion.p className="subtle-text text-center" variants={itemVariants}>
          Forms and documents are essential tools for organizations to manage
          operations and gather critical business data. However, the manual
          processing of these documents can be time-consuming and repetitive.
          With Intelligent Document Processing (IDP), AI can automate the
          extraction of vital information from various sources, streamlining
          routine business operations. By leveraging AI for data extraction,
          organizations can focus on the most important details, prioritize
          tasks, and deliver high-quality services more efficiently and
          effectively.
        </motion.p>

        <motion.h1 className="h2 text-center" variants={itemVariants}>
          About Document AI
        </motion.h1>

        <motion.p className="subtle-text text-center" variants={itemVariants}>
          The process of scanning an image and generating a digital
          representation of the document so that people may engage with its
          content in different ways is known as document processing. Optical
          character recognition, natural language processing, handwritten text
          recognition, text extraction, and other machine learning disciplines
          are used in document artificial intelligence (AI) to validate data,
          analyze documents, and assist people in meaningfully extracting
          information from them.
        </motion.p>
        <motion.p className="font-medium text-[#0055A7] text-center" variants={itemVariants}>
          Gathers information from many sources more quickly and easily by using
          sophisticated character recognition and AI-powered text data analysis
          to extract data from forms and unstructured text. This information is
          needed to carry out a range of business operations
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default DocumentHero;
