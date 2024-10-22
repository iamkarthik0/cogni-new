"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

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

const PharmaHero = () => {
  return (
    <>
      <AnimatedSection>
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:pt-8">
            <motion.p
              className="subtle-text font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI FOR PHARMA
            </motion.p>
            <motion.h1
              className="h1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              AI consultants for pharma
            </motion.h1>
            <motion.p
              className="subtle-text lg:w-3/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              AI is transforming healthcare, helping to speed up time to
              insights which can lead to better care outcomes and improved
              productivity and efficiency of care delivery.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact-us"><Button className="btn">CONSULT WITH AN AI EXPERT</Button></Link>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2 flex justify-end items-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative w-full aspect-square h-[285px]">
              <Image src="/pharma-hero.png" alt="pharma" fill className="" />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className="aspect-square h-[400px] lg:h-[503px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Unlock the Potential of Healthcare AI
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Harness the power of AI to streamline and enhance the work of
                healthcare professionals by automating routine tasks with
                precision and efficiency. AI not only matches human accuracy but
                also accomplishes these tasks faster and at a significantly
                lower cost.
              </p>
              <p className="subtle-text">
                Harness the power of AI to streamline and enhance the work of
                healthcare professionals by automating routine tasks with
                precision and efficiency. AI not only matches human accuracy but
                also accomplishes these tasks faster and at a significantly
                lower cost.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="space-y-14 lg:space-y-20">
          <motion.h1
            className="h1 text-center pt-8 lg:pt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            How we can help solve Healthcare problems
          </motion.h1>
          {['risk.png', 'risk.png', 'tiral-data.png'].map((img, index) => (
            <AnimatedSection key={index}>
              <div className={`flex flex-col lg:flex-row gap-6 lg:gap-9 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  className="lg:w-1/2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={`/${img}`}
                    alt="unlock"
                    width={610}
                    height={100}
                    className="aspect-square h-[400px] lg:h-[503px]"
                  />
                </motion.div>
                <div className="lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
                  <motion.h1
                    className="h1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Unlock the Potential of Healthcare AI
                  </motion.h1>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="subtle-text">
                      Harness the power of AI to streamline and enhance the work of
                      healthcare professionals by automating routine tasks with
                      precision and efficiency. AI not only matches human accuracy
                      but also accomplishes these tasks faster and at a
                      significantly lower cost.
                    </p>
                    <p className="subtle-text">
                      Harness the power of AI to streamline and enhance the work of
                      healthcare professionals by automating routine tasks with
                      precision and efficiency. AI not only matches human accuracy
                      but also accomplishes these tasks faster and at a
                      significantly lower cost.
                    </p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="pt-16 lg:pt-20">
          <motion.h1
            className="h1 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose Cogninest AI?
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-10 lg:pt-14">
            {[1, 2, 3].map((_, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  className="space-y-5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative aspect-square h-[250px] w-full">
                    <Image src="/pharma-choose.png" alt="pharma" fill />
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold">Knowledge</h4>
                    <p>
                      At Cogninest AI, we are globally recognized data science
                      experts with a proven track record, boasting over 500
                      citations and patents. Our specialization spans Computational
                      Linguistics, Natural Language Processing (NLP), Machine
                      Learning, Deep Learning, and Data Analytics, ensuring we
                      deliver cutting-edge solutions.
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default PharmaHero