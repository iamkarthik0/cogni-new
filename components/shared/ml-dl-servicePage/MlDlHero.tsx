"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const MlDlHero = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:pt-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h1"
        >
          Machine Learning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="subtle-text"
        >
          From Data Crunching to Actionable Insights—Machine Learning Services
          empower organizations to Make Smarter Decisions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button className="btn">CONTACT US</Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="lg:w-1/2 flex justify-end items-end"
      >
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image
            src="/ml-dl.png"
            alt="Person using computer with data visualizations"
            fill
            className="object-cover rounded-none"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default MlDlHero