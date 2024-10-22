"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const HealthHero = () => {
  return (
    <>
      <div>
        <AnimatedSection>
          <h1 className="h1 max-w-4xl mx-auto text-center pb-6 pt-10">
            Transformative AI Solutions in Healthcare
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="w-full aspect-square relative h-[200px] md:h-[300px] lg:h-[499px]">
            <Image src="/healthcare.png" fill alt="health" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-6 pt-8 lg:pt-14">
            <h4 className="h3 text-center">Our Expertise</h4>
            <p className="text-center lg:mx-7">
              With deep industry knowledge, we help businesses thrive in the
              ever-evolving Healthcare and Life Sciences sectors. Our solutions
              and custom data products, powered by AI/ML, Advanced Analytics,
              Generative AI, and Data Engineering, empower clients to achieve
              operational self-sufficiency and drive innovation.
            </p>
            <h1 className="h1 text-center">Solutions</h1>
          </div>
        </AnimatedSection>

        <div>
          {['Healthcare Sales', 'Commercial Marketing', 'Advanced Analytics '].map((title, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="p-12 bg-[#F2F2F2] rounded-[50px] space-y-5 mt-14"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h1 className="h3">{title}</h1>
                <p className="subtle-text">
                  {/* Content for each section */}
                  {index === 0 && (
                    <>
                      In today's rapidly evolving healthcare industry, organizations
                      must develop sales strategies that drive sustainable value and
                      support growth. Our innovative approach leverages
                      <span className="font-semibold"> data analytics</span> and AI to
                      create custom, transparent solutions that enhance the
                      effectiveness of healthcare sales teams and improve field
                      engagement by 8x. This empowers healthcare organizations to
                      optimize their sales processes, streamline operations, and
                      maximize patient and business outcomes.
                    </>
                  )}
                  {index === 1 && (
                    <>
                      Achieving success in the healthcare and life sciences sectors
                      demands a highly optimized marketing strategy. At Cogninest AI, we
                      harness our analytics expertise to deliver a seamless omnichannel
                      experience that enhances patient engagement and maximizes Return
                      on Investment (ROI). Our data-driven solutions, including
                      <span className="font-semibold">
                        {" "}
                        Marketing Mix Modeling (MMx), Next Best Action (NBA), field
                        suggestions, omnichannel dashboards, and Multi-Touch Attribution
                        (MTA) models,
                      </span>{" "}
                      enable healthcare organizations to double their speed to insights
                      and decision-making, empowering them to deliver more impactful
                      outcomes.
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Unlocking actionable insights in healthcare requires precise
                      analysis of complex data. We leverage cutting-edge
                      <span className="font-semibold"> AI/ML</span> techniques to
                      enhance critical areas such as
                      <span className="font-semibold">
                        {" "}
                        HCP targeting, prescriber behavior analysis, next-best-action
                        (NBA) strategies, value-based care contracting, rare disease
                        diagnosis, patient identification, demand forecasting, patient
                        flow optimization, and multitouch attribution.
                      </span>
                      Our solutions enable healthcare organizations to extract maximum
                      value from their data, driving better outcomes and efficiency.
                    </>
                  )}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row pt-16 lg:pt-24">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="h1">What is AI for healthcare?</h1>
            <p>
              AI for healthcare involves applying advanced algorithms and machine
              learning models to diagnose, predict, and treat medical conditions.
              This technology is a key component of the broader MedTech or
              HealthTech landscape, which also encompasses non-AI innovations in
              healthcare. At Cogninest AI, we harness the power of Natural
              Language Processing (NLP), Computer Vision, and Deep Learning to
              enhance and extend the capabilities of human clinicians. The AI
              revolution is transforming every aspect of healthcare, with
              specialized narrow AI and Strong AI algorithms designed to solve
              specific challenges more efficiently and accurately than ever
              before.
            </p>
          </div>
          <motion.div
            className="lg:w-1/2 relative aspect-square h-[300px] lg:h-[437px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/aifor.png"
              alt="aifor"
              fill
              className="w-[549px] aspect-square"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="pt-16">
          <h1 className="h1 max-w-4xl">Why Choose Cogninest AI for Retail?</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {[
              {
                title: "AI-Driven Innovation",
                content: "At Cogninest AI, we harness the power of AI/ML and Generative AI to deliver innovative, data-driven solutions that revolutionize healthcare and life sciences organizations. Our expertise transforms data into actionable insights, enabling smarter decision-making.",
                bgColor: "bg-[#F2F2F2]",
              },
              {
                title: "Tailored Solutions for Complex Challenges",
                content: "We understand the intricacies of the healthcare sector. Our custom-built solutions are designed to address specific challenges like HCP targeting, prescriber journeys, and patient flow optimization, ensuring that your organization maximizes efficiency and outcomes.",
                bgColor: "bg-[#EEF6FF]",
              },
              {
                title: "Proven Impact on Sales and Marketing",
                content: "With a track record of enhancing healthcare sales team effectiveness by 8x and doubling the speed to insights in marketing, Cogninest AI delivers results that drive growth and sustainable value for our clients.",
                bgColor: "bg-[#EEF6FF]",
              },
              {
                title: "End-to-End Data Solutions",
                content: "From Advanced Analytics to value-based care strategies, we provide an integrated suite of AI-powered solutions that improve operational self-sufficiency, enabling healthcare organizations to stay ahead in a fast-evolving market.",
                bgColor: "bg-[#F2F2F2]",
              },
              {
                title: "Commitment to Innovation and Excellence",
                content: "Our AI-driven solutions are not just cutting-edge—they're scalable, transparent, and designed to empower healthcare organizations with the tools they need to thrive in a competitive landscape.",
                bgColor: "bg-[#F2F2F2]",
              },
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  className={`p-12 ${item.bgColor} rounded-[23px] space-y-5 mt-14`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h1 className="h4">{item.title}</h1>
                  <p className="subtle-text">{item.content}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default HealthHero