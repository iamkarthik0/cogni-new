"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const IdpMain = () => {
  const sections = [
    {
      title: "Generative AI for Documents",
      description: "Solve document automation challenges using the latest Large Language Models (LLMs). Customize AI models and applications using your data faster than ever before.",
      image: "/idp1.png",
    },
    {
      title: "Industry-Leading Results",
      description: "Cogninest AI IDP breaks down complex processing tasks into simpler ones. Each task is routed to the best AI, human, or software worker for optimal results.",
      image: "/idp2.png",
      reverse: true,
    },
    {
      title: "Automatic Automation",
      description: "Results from human, AI, and software workers are combined into a unified output. New AI workers are continuously deployed to increase automation rates.",
      image: "/idp3.png",
    },
    {
      title: "Guaranteed Outcome",
      description: "Users define desired quality, cost, and speed, then the platform automatically selects the right combination of AI, human, and bot workers to guarantee results.",
      image: "/idp4.png",
      reverse: true,
    },
  ]

  return (
    <div>
      <div className="space-y-16">
        {sections.map((section, index) => (
          <AnimatedSection key={index}>
            <div className={`relative flex flex-col lg:flex-row gap-6 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-4">
                <motion.h1
                  className="h2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {section.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {section.description}
                </motion.p>
              </div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Image src={section.image} alt="business" width={539} height={396} />
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="pt-16 lg:pt-32">
          <motion.div
            className="px-6 lg:px-14 py-10 flex lg:flex-row flex-col bg-[#1B255E] rounded-[28px] gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 space-y-4 flex flex-col justify-center">
              <motion.h1
                className="h2 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Get a customized demo with your documents
              </motion.h1>
              <motion.p
                className="paragraph text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Book a free consultation with our experts.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="contact-us">
                  <Button className="btn my-4">Schedule Demo</Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2 h-[336px] bg-[#26337A] rounded-[28px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default IdpMain