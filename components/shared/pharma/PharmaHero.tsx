"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import MediaCard from "@/components/layout/MediaCard";

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

const PharmaHero = () => {
  const card = [
    {
      heading: "Boosting Efficiency and Speed",
      paragraph:
        "Generative AI algorithms generate vast libraries of virtual compounds and predict their properties, helping researchers focus on the most promising candidates. This optimizes both time and resources.",
    },
    {
      heading: "Expanding the Chemical Space",
      paragraph:
        "These algorithms explore novel chemical structures that might not have been considered by human researchers, opening up new possibilities for developing drugs with improved efficacy and fewer side effects.",
    },
    {
      heading: "Targeting Specific Diseases ",
      paragraph:
        "By analyzing known drug-target interactions, generative AI models predict potential drug candidates for specific diseases, improving the chances of success in treating various conditions.",
    },
    {
      heading: "Overcoming Data Limitations",
      paragraph:
        "Generative AI generates synthetic data points from existing data, overcoming traditional drug discovery challenges caused by limited high-quality data. This leads to better drug discovery outcomes",
    },
    {
      heading: "Facilitating Collaboration",
      paragraph:
        "Generative AI algorithms facilitate knowledge sharing among researchers, fostering collaborative breakthroughs in drug discovery.",
    },
    {
      heading: "Overcoming Drug Resistance",
      paragraph:
        "AI-designed drugs can target drug-resistant strains, offering new solutions to combat antibiotic resistance and other drug-resistant diseases.",
    },
  ];
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
              Pharma AI Solutions: Transforming Healthcare through Innovation
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
              <Link href="/contact-us">
                <Button className="btn">CONSULT WITH AN AI EXPERT</Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2 flex   justify-end"
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
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={550}
              height={100}
              className="aspect-square h-[400px] lg:h-[400px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Driving Innovation in Drug Discovery and Development
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                At Cogninest AI, we leverage cutting-edge AI and Machine
                Learning technologies to revolutionize the pharmaceutical
                industry. By streamlining the drug discovery and development
                process, we help pharma companies reduce time-to-market,
                optimize R&D, and enhance the accuracy of drug formulation. With
                our advanced solutions, pharmaceutical firms can identify
                promising compounds faster and with greater precision,
                ultimately improving patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <div className=" text-center my-16 space-y-6">
        <h1 className=" h2">What are Generative AI Drugs?</h1>
        <p>
          Generative AI drugs are pharmaceutical compounds designed and
          developed using generative AI algorithms, which are trained on
          extensive datasets, including chemical structures, biological
          interactions, and clinical trial results. These algorithms analyze the
          data to generate novel drug candidates that meet specific criteria,
          target mechanisms, and desired properties.
        </p>
      </div>
      <div>
        <div>
          <div className=" space-y-4">
            <h3 className="h3">Harnessing Generative AI for Drug Discovery</h3>
            <p>
              Generative AI is transforming how new drugs are discovered by
              accelerating the process and expanding the range of possibilities.
            </p>
          </div>
          <MediaCard services={{ card }} />
        </div>
      </div>
      <AnimatedSection>
        <div className=" pt-8 lg:pt-16">
          <h2 className=" text-center h2 lg:max-w-3xl mx-auto">
            How we can help solve Healthcare problems
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/risk.png"
              alt="unlock"
              width={550}
              height={100}
              className=" h-[400px] lg:h-[350px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Personalized Medicine through AI-Driven Insights
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Cogninest AI’s solutions enable personalized medicine by
                analyzing genomic, clinical, and lifestyle data. This leads to
                tailored treatment plans, improving patient outcomes through:
              </p>
              <p className="subtle-text">
                Biomarker Discovery: AI identifies biomarkers predicting disease
                progression and treatment response.Patient Stratification: AI
                models group patients by treatment response, optimizing
                therapies for each individual.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2 "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/risk.png"
              alt="unlock"
              width={550}
              height={100}
              className=" h-[400px] lg:h-[350px]"
            />
          </motion.div>
          <div className="order-first  lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI in Clinical Trials: Improving Efficiency and Reducing Costs
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Our AI-driven solutions optimize clinical trial designs, predict
                patient outcomes, and reduce the time and cost of trials
                by:Patient Recruitment and Retention: Analyzing patient records
                and historical data to find the best-suited participants for
                clinical trials.Predictive Analytics: Forecasting trial success
                rates to improve decision-making and reduce trial costs.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>



      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2 "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/risk.png"
              alt="unlock"
              width={550}
              height={100}
              className=" h-[400px] lg:h-[350px]"
            />
          </motion.div>
          <div className="order-first  lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            AI-Powered Pharmacovigilance
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
              Ensuring post-market drug safety is critical. Our AI-driven pharmacovigilance models analyze real-world data to detect adverse drug reactions early, helping ensure compliance and patient safety by:
              </p>
              <p>Adverse Event Detection: AI models analyze data to detect side effects earlier.
              Signal Detection and Management: Our algorithms manage safety signals effectively.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2 "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/tiral-data.png"
              alt="unlock"
              width={550}
              height={100}
              className=" h-[400px] lg:h-[350px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
         Generative AI in Pharma Manufacturing
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
              AI enhances manufacturing processes, predicting equipment failures, optimizing workflows, and ensuring high-quality production by:
              </p>

      <p>Predictive Maintenance: Preventing costly downtime by detecting equipment failures before they occur.Process Optimization: Streamlining manufacturing processes and ensuring compliance with Good Manufacturing Practices (GMP).</p>

            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="pt-16 lg:pt-20">
          <motion.h1
            className="h2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose Cogninest AI?
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-10 lg:pt-14">
            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
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

            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-square h-[250px] w-full">
                <Image src="/Healthtechnology.png" alt="pharma" fill />
              </div>
              <div className="space-y-6">
                <h4 className="font-bold">Technology</h4>
                <p>
                  We leverage the latest AI technologies, tools, and techniques
                  to help businesses rapidly onboard data at scale. By
                  harnessing diverse AI models and applications, we empower
                  organizations to gain actionable insights, enabling more
                  informed and strategic decision-making.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-square h-[250px] w-full">
                <Image src="/HealthPartnership.png" alt="pharma" fill />
              </div>
              <div className="space-y-6">
                <h4 className="font-bold">Partnership</h4>
                <p>
                  We work in partnership with our clients to ensure we find the
                  best solution to solve their impossible problem and drive
                  positive business outcomes that make a measurable impact on
                  performance, innovation and efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PharmaHero;
