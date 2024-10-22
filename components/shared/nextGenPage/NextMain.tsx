"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeatureCard from "@/components/layout/FeatureCard";
import { Button } from "@/components/ui/button";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const NextMain = () => {
  const card = [
    {
      title: "Data Management",
      subtile:
        "We partner with clients to set up large scale data management. Our engineers have hands-on experience in creating, managing, and migrating petabyte-scale data lakes and warehouses using the latest advances in technology. Businesses can therefore get optimized storage costs, maintainability, and retrieval.",
      paragraph:
        "Leveraging DataOps to automate and improve data quality for a Healthcare ISV enterprise",
    },
    {
      title: "BI & Analytics for Robust Analytics Solutions",
      subtile:
        "We partner with clients to set up large scale data management. Our engineers have hands-on experience in creating, managing, and migrating petabyte-scale data lakes and warehouses using the latest advances in technology. Businesses can therefore get optimized storage costs, maintainability, and retrieval.",
      paragraph:
        "Building a Marketing Analytics platform for a crowdfunding platform to drive better campaign performance",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      subtile:
        "We help businesses to build personalized AI solutions to extract actionable insights or automate decision making. Organizations partner with us to build deep learning models, NLP modelling, and for Robotic Process Automation.",
      paragraph:
        "NLP modelling for a Fortune 500 Media Tech enterprise to extract insights from raw data.",
    },
    {
      title: "Data Science",
      subtile:
        "Our Data Scientists help organizations with feature engineering, data analysis, model validations, and building custom intelligence platforms. Clients leverage our data science practice by utilizing data to better understand their customers, optimize operations, and uncover new business opportunities.",
      paragraph:
        "Statistical modelling to improve and customize training inputs for a fitness platform.",
    },
  ];

  const features = [
    {
      title: "Democratizing Data",
      description:
        "We break down silos among an organization's data and store these data in a common data lake/warehouse. Robust authentication and access controls are built to access it. The datasets are then made available to the respective stakeholders via interactive, self-service dashboards with drag and drop features. This empowers even non-technical professionals to derive insights from data.",
      variant: "gray",
    },
    {
      title: "Preventing Data Security Risks",
      description:
        "Our DevSecOps practices and boilerplates ensure that security and governance best practices are embedded in the development cycle so that data is never compromised. This is done by implementing a data strategy with security as an integral and important consideration. With our data security services, you can rest assured that your big data ecosystem is protected from threats.",
      variant: "gray",
    },
    {
      title: "Cost Optimization",
      description:
        "Storing, processing, and analyzing Big Data is costly. Our cloud expertise means that you are always maximizing your ROI from cloud platforms. Furthermore, our consultative approach helps you make the right decisions on build vs buy, ensuring activities do not overshoot budgets.",
      variant: "gray",
    },
    {
      title: "Data Governance",
      description:
        "Our engineering mechanisms ensure quality of data is uncompromised wherever it is processed or stored. Our projects are set up with detailed policies and guidelines on data governances. Checks are placed at regular intervals to ensure the sanctity of data is not lost.",
      variant: "gray",
    },
  ];

  return (
    <div>
      <AnimatedSection>
        <div className="space-y-8">
          <h1 className="h1">
            We Consult and Partner With Our Clients In their Journey to Become a
            Data-driven Organization, Providing Specific or End-to-end Data
            Services and Expertise:
          </h1>
          <p>
            We solve big data challenges for clients to help them become a truly
            digital business. Our big data consulting services encompass big
            data strategy, real time big data processing services, machine
            learning, data platform management, and analytics solutions. Because
            we believe that every business can become a data-driven business, we
            help you implement a comprehensive big data strategy and shine the
            spotlight on big data analytics solutions.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-14">
          {[
            "Data Ingestion ❯",
            "Data Storage ❯",
            "Data Pipeline ❯",
            "BI & Analytics ❯",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="px-5 py-10 space-y-4 bg-[#EEEEEE] rounded-[23px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="paragraph font-medium">{title}</h1>
              <p>
                Scalable and open source platforms to collect, ingest, and
                manage multiple data sources
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="space-y-8 pt-8 lg:pt-16">
          <h1 className="h1">Our Big Data Service Capabilities</h1>
          <p>
            We partner with businesses anywhere they are in their journey to
            extract value from data and turn them into actionable insights –
            unlocking competitive advantages for organizations.
          </p>

          <div className="flex flex-col lg:gap-8">
            {[
              {
                title: "Data Ingestion ❯",
                description:
                  "Our capabilities help discover potential sources of data and build a robust ​Data Ingestion mechanism to collect, ingest, and manage multiple data sources.",
              },
              {
                title: "Data Storage ❯",
                description:
                  "Our ​Data Storage experience includes engineering scalable data warehouses and data lakes to efficiently store and retrieve data. Proficiency in databases, multiple tech stacks, and database models such as Graph, Search, Columnar, and Timeseries ensure that we choose the best available solution to suit your use case to make data available fast and in the right format.",
              },
              {
                title: "Data Pipeline ❯",
                description:
                  "To manage volume, variety, and velocity of data, our experienced data engineering teams build Data Pipelines that have integrated quality checks to process stream (real-time) or batch (historical) data.",
              },
              {
                title: "BI & Analytics ❯",
                description:
                  "Business also leverages our ​BI and Analytics capabilities​ to build interactive and self-service dashboards to consume and visualize their data to derive insights for enhanced decision making. We leverage popular BI platforms or custom make them to suit the organization's needs. We leverage popular BI platforms or custom make them to suit the organization's needs",
              },
              {
                title: "AI & ML ❯",
                description:
                  "Our Artificial Intelligence practice​ allows the business to build custom models to automate decision making.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <h1 className="paragraph text-[#0055A7]">{item.title}</h1>
                  <p className="max-w-4xl">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="space-y-6 pt-8 lg:pt-14">
          <div className="space-y-8">
            <h1 className="h1">
              See How our Next-Gen Data Solutions can Help your Business Grow
            </h1>
            <p>
              Maintaining a high level of user engagement is how companies stay
              relevant. Our advances in technology and design thinking help you
              achieve it.
            </p>
          </div>
          {card.map((data, index) => (
            <AnimatedSection key={index}>
              <div className="flex flex-col lg:flex-row bg-[#EEEEEE] p-8 rounded-[23px] gap-6">
                <div className="lg:w-3/5 space-y-4">
                  <h4 className="paragraph font-semibold">{data.title}</h4>
                  <p className="max-w-2xl">
             {data.subtile}
                  </p>
                </div>
                <div className="lg:w-2/5 bg-[#DBDBDB] px-6 py-10 rounded-[23px] space-y-4">
                  <h4 className="paragraph font-semibold text-center">
                 {data.paragraph}
                  </h4>
                  <div className="flex justify-center">
                    <Button className="btn">READ MORE</Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="pt-10 lg:pt-20 space-y-6">
          <h1 className="h1">Get The Cogninest AI Advantage</h1>
          <p>
            We help you to break down siloes, use boilerplates to reduce
            security risks, and optimize your data storage and processing costs.
            We do all this while maintaining the utmost data privacy.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((data, index) => (
              <AnimatedSection key={index}>
                <FeatureCard
                  variant={data.variant}
                  title={data.title}
                  description={data.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
