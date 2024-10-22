"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurDocument = () => {
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
        staggerChildren: 0.3,
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h1 className="h1 text-center pb-8 lg:pb-16">OUR Document AI SERVICES</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* --------------------------------- */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="w-[102px] h-[94px] bg-[#1B255E]"></div>
          <div className="text-center space-y-8">
            <h1 className="h3">Comprehensive document processing</h1>
            <p>
              Using optical character recognition, deep learning, machine
              learning, and natural language processing, Cogninest AI Document
              AI gathers, extracts, and analyzes data from a variety of document
              formats. In doing so, unstructured and semi-structured texts are
              converted into data that machine learning algorithms may utilize
              to make predictions, embodying the principles of Intelligent
              Document Processing.
            </p>
          </div>
        </motion.div>
        {/* --------------------------------- */}

        {/* --------------------------------- */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="w-[102px] h-[94px] bg-[#1B255E]"></div>
          <div className="text-center space-y-8">
            <h1 className="h3">Automated data labeling</h1>
            <p>
              With the help of Cogninest AI Document AI, data scientists and
              business users can easily annotate documents by using an easy user
              interface, fixing data labeling mistakes in training data, and
              automatically creating labels for unlabeled documents. In addition
              to offering sophisticated options for verifying labels against
              scored documents and assessing labeling adequacy, Cogninest
              Document AI interfaces with standard label formats.
            </p>
          </div>
        </motion.div>
        {/* --------------------------------- */}

        {/* --------------------------------- */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="w-[102px] h-[94px] bg-[#1B255E]"></div>
          <div className="text-center space-y-8">
            <h1 className="h3">Intelligent information extraction</h1>
            <p>
              Results from Cogninest Document AI are rapid and incredibly
              accurate. Cogninest Document AI was created with input from a wide
              range of users, including top Kaggle grandmasters. It extracts
              important data from documents, including entity names, logos,
              images, invoice numbers, and more, by combining optical character
              recognition (OCR), natural language processing, and intelligent
              character recognition (ICR).
            </p>
          </div>
        </motion.div>
        {/* --------------------------------- */}

        {/* --------------------------------- */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="w-[102px] h-[94px] bg-[#1B255E]"></div>
          <div className="text-center space-y-8">
            <h1 className="h3">Comprehensive document processing</h1>
            <p>
              Through a REST API that can process documents, train, and score
              models, Cogninest Document AI seamlessly integrates with current
              apps and processes. Then, models may be maintained and observed in
              Cogninest MLOps, which offers a supervised scoring environment and
              takes care of error management, scalability, logging, and A/B
              testing. You may create quick AI apps that use created models in
              Cogninest Document by utilizing the Cogninest AI Document REST API
              and Cogninest AI Wave.
            </p>
          </div>
        </motion.div>
        {/* --------------------------------- */}
      </div>

      <div className="pt-16 lg:pt-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="h3 text-center lg:text-left">Data Extraction</h4>
            <Image
              alt="data-extraction"
              src="/data-extraction.png"
              width={512}
              height={254}
            />
          </motion.div>

          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="h3 text-center lg:text-left">Data Management</h4>
            <Image
              alt="data-management"
              src="/data-management.png"
              width={512}
              height={254}
            />
          </motion.div>
        </div>
      </div>

      <div className="lg:pt-24 pt-16 space-y-8">
        <h1 className="h3 text-center">
          Data Extraction AI for Insurance Claims
        </h1>
        <div className="flex justify-center">
          <Image
            alt="data-extraction-insurance"
            src="/data-extraction-insurance.png"
            width={992}
            height={398}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OurDocument;
