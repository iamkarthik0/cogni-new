"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const GenAIHero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <motion.div 
        className="flex flex-col justify-between lg:w-1/2 gap-6 py-8 lg:pt-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Embrace transformation's newest frontier: Generative AI
        </motion.h1>
        <motion.p 
          className="subtle-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          New frontiers in the development of artificial intelligence are
          being opened by generative AI. It gives us access to limitless
          potential, accelerates digital transformation, and significantly
          alters business and work with increased degrees of human-machine
          cooperation. With responsible use, we may turn this technology
          into a vehicle for AI-powered predictive analytics and AI-driven
          innovation, which will enhance daily living, encourage creativity,
          and open up new avenues for exploration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button className="btn">CONTACT US</Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="lg:w-1/2 flex justify-end items-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image
            src="/ai-service.png"
            alt="Person using computer with data visualizations"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default GenAIHero