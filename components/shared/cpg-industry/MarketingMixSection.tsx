'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useInView as useReactUseInView } from "react-intersection-observer"
import Link from "next/link"

const MarketingMixSection = (props: any) => {
  const features = [
    {
      title: "Optimized Marketing Mix Analysis",
      description: "Marketing Mix Modeling (MMx) is essential for accurately assessing and planning promotional strategies. Our advanced approach empowers businesses to cut growth costs by maximizing the return on investment (ROI) from their marketing spend. By determining both short- and long-term effects of marketing investments, our integrated model captures synergies across omnichannel and offline platforms. Using a dynamic optimizer, we analyze multiple business scenarios and develop optimal spending strategies that drive enterprise success."
    },
    {
      title: "Optimized Pricing and Promotion Solutions",
      description: "Pricing and promotions are essential drivers of revenue for CPG businesses. Our approach focuses on refining pricing and promotion strategies by using advanced system modeling that reflects the dynamics of business processes across various channels. We implement causal modeling to extract actionable business insights, facilitating swift and efficient decision-making. With our expertise in calculating price elasticities and creating impact-driven solutions, businesses can measure the outcomes and opportunities presented by their pricing strategies. Moreover, we develop a fully optimized promotion calendar designed to boost both revenue and margin growth."
    },
    {
      title: "Advanced Product Assortment & Distribution Solutions for CPG Success",
      description: "Effective product assortment and distribution are critical for growth in the CPG industry. Our data-driven approach combines market trend analysis and real-time insights to optimize localized product affinities and assortment strategies. Leveraging an advanced AI-powered recommendation tool, we tackle business complexities while ensuring precise execution of assortment and distribution plans. Our specialized key account framework further customizes strategies, enhancing profitability and operational efficiency. Discover how our solutions transform your product assortment, maximize distribution reach, and drive competitive advantage in the CPG sector."
    },
    {
      title: "Maximize Revenue with Proactive Revenue Growth Management (RGM)",
      description: "Our cutting-edge Revenue Growth Management (RGM) solutions empower CPG companies to stay ahead in a rapidly evolving market. Leveraging our Connected Intelligence and Generative AI, we simplify decision-making on critical levers like pricing strategies, assortment optimization, and data-driven insights. Our RGM suite identifies gaps in your current strategies, helping you drive higher Marketing Qualified Leads (MQLs) and improving profitability with data at your fingertips. Gain full control over your data and intelligence, ensuring seamless, high-impact growth throughout your journey. Unlock your revenue potential with precision and confidence."
    },
    {
      title: "Shopper Insights, Customer Segmentation, and Targeting",
      description: "In a rapidly evolving CPG domain, understanding shopper behavior is paramount. Our continuous analysis of shopper behavior integrates social, secondary, and survey data to capture crucial insights. We employ these insights to drive targeted shopper recruitment and engagement strategies, enabling our clients to achieve their growth objectives. Insights derived from these practices are also used to develop shopper-driven innovation and product selection strategies that can boost brand loyalty and engagement."
    },
    {
      title: "Demand Forecasting",
      description: "Accurate demand forecasting is pivotal for driving growth and revenue in the CPG industry. Through an adaptive, multi-scenario forecasting system, we help global enterprises address disruptions and adapt to real-time changes. By integrating this system with scalable business processes, we help our clients eliminate redundancies and optimize their forecasts. With an innovative and advanced algorithm design, we ensure continuous performance enhancement to deliver the most accurate forecast results."
    },
    {
      title: "Supply Chain and Inventory Management",
      description: "A resilient supply chain is essential for growth in the CPG industry. We provide end-to-end visibility solutions that identify inefficiencies and unlock growth opportunities. Our tailored approach ensures product availability by optimizing inventory management based on real-time market trends, customer behavior, and demand forecasting."
    },
  ]

  const [selectedFeature, setSelectedFeature] = useState(features[5])

  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Features list */}
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={`flex items-start gap-2 text-gray-600 group cursor-pointer ${
                    selectedFeature.title === feature.title ? 'text-black font-semibold' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${
                    selectedFeature.title === feature.title ? 'bg-black' : 'bg-gray-400'
                  } group-hover:bg-black flex-shrink-0`} />
                  <span className="text-sm md:text-base leading-relaxed group-hover:text-black">
                    {feature.title}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right side - Blue card */}
          <div className="lg:w-1/2">
            <Card className="bg-[#0766C2] text-white h-full py-10 rounded-[23px]">
              <CardContent className="p-6 lg:p-8 flex flex-col gap-6">
                <motion.p
                  key={selectedFeature.title}
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedFeature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/contact-us">
                    <Button
                      variant="secondary"
                      className="bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors"
                    >
                      LET'S TALK
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MarketingMixSection