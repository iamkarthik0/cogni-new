"use client"

import FeatureCard from "@/components/layout/FeatureCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const GptHero = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const features = [
    {
      title: "ChatGPT consulting services",
      description:
        "Using optical character recognition, deep learning, machine learning, and natural language processing, Cogninest Document AI gathers, extracts, and analyzes data from a variety of document formats. In doing so, unstructured and semi-structured texts are converted into data that machine learning algorithms may utilize to make predictions, embodying the principles of Intelligent Document Processing.",
      variant: "gray",
    },
    {
      title: "Comprehensive Revenue Growth Management (RGM)",
      description:
        "Our RGM solutions leverage advanced AI and Connected Intelligence to optimize pricing, promotions, and assortment strategies, boosting profitability and market competitiveness.",
      variant: "gray",
    },
    {
      title: "Tailored, Industry-Focused Solutions",
      description:
        "From optimized marketing mix analysis to advanced product assortment and distribution strategies, our specialized tools are designed to meet the unique challenges of the CPG industry.",
      variant: "gray",
    },
    {
      title: "Proven Demand Forecasting Expertise",
      description:
        "Our adaptive forecasting systems provide real-time insights, allowing businesses to respond swiftly to market shifts, minimize disruptions, and enhance accuracy in decision-making.",
      variant: "gray",
    },
    {
      title: "Generative AI Leadership",
      description:
        "Stay ahead of the curve with our GenAI-powered tools that revolutionize your business growth, offering seamless automation and innovative solutions for a competitive edge in today's fast-evolving market.",
      variant: "gray",
    },
    {
      title: "Generative AI Leadership",
      description:
        "Stay ahead of the curve with our GenAI-powered tools that revolutionize your business growth, offering seamless automation and innovative solutions for a competitive edge in today's fast-evolving market.",
      variant: "gray",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
      <motion.div className="flex flex-col lg:flex-row w-full justify-between gap-6" variants={itemVariants}>
        <div className="flex-1 flex justify-center flex-col lg:max-w-1/2 space-y-5 pt-8 lg:pt-0">
          <motion.h1
            className="h1 lg:max-w-2xl"
            variants={itemVariants}
          >
            ChatGPT Integration Services
          </motion.h1>
          <motion.p
            className="subtle-text"
            variants={itemVariants}
          >
            Boost your existing software's capabilities with our
            all-encompassing ChatGPT Integration Services. We cover every aspect
            of the GPT architecture, harnessing the power of Natural Language
            Processing and Machine Learning for superior performance.
          </motion.p>
          <Link href="contact-us">
            <motion.div variants={itemVariants}>
              <Button className="btn">Let's Talk</Button>
            </motion.div>
          </Link>
        </div>

        <motion.div
          className="flex-1 lg:max-w-1/2 flex justify-center lg:justify-end"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src="/predictive.png" alt="finance" width={496} height={400} />
        </motion.div>
      </motion.div>

      <motion.div className="space-y-10 pt-16 lg:pt-20" variants={containerVariants}>
        <motion.h1
          className="h1 lg:max-w-1/2"
          variants={itemVariants}
        >
          Cogninest AI ChatGPT Integration services include
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {features.map((data, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FeatureCard
                variant={data.variant}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="space-y-16 pt-16 lg:pt-20" variants={containerVariants}>
        <motion.h1
          className="h1 text-center"
          variants={itemVariants}
        >
          Unlocking the vast potential of ChatGPT integration
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-4xl mx-auto gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
             
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="group bg-[#D9D9D9] hover:bg-[#0055A7] transition-all duration-300 ease-in-out cursor-pointer rounded-none h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                      Analysis and research
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm group-hover:text-white transition-colors duration-300 ease-in-out">
                      Integrating ChatGPT into analysis and research processes
                      empowers businesses to extract valuable insights from vast
                      amounts of data. ChatGPT can conduct market research,
                      sentiment analysis, trend forecasting, and other analytical
                      tasks, enabling data-driven decision-making and strategic
                      planning.
                    </p>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default GptHero