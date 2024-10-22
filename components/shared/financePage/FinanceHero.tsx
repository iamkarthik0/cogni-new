"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

const FinanceHero = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div   ref={ref}>
      <div className=" flex  flex-col  lg:flex-row gap-6">
        <motion.div
        
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center flex-col  lg:max-w-1/2  space-y-5 pt-8 lg:pt-0"
        >
          <p className="subtle-text">Finance & Insurance</p>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className=" h1 lg:max-w-2xl"
          >
            {" "}
            AI Solutions for Finance & Insurance
          </motion.h1>
          <Link href="contact-us">
            {" "}
            <Button className="btn">Lets Talk</Button>{" "}
          </Link>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className=" lg:max-w-1/2"
        >
          <Image src="/finance.png" alt="finance" width={612} height={400} />
        </motion.div>
      </div>

      <div className=" pt-8 lg:pt-16 space-y-8">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Harness AI systems tailored to your unique business needs to
          streamline processes, enhance risk assessment, and deliver
          unparalleled insights for more informed decision-making. At Cogninest
          AI, we manage the entire AI process—from strategy and implementation
          to optimization—ensuring you receive fully functional solutions that
          drive growth and sharpen your competitive edge in the market. Let us
          empower your business with AI-driven innovation that fuels long-term
          success.
        </motion.p>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h4"
        >
          Personalized Financial Services</motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          AI enables financial institutions to offer personalized services
          tailored to individual customer needs. By analyzing customer data and
          behavior, AI systems can recommend investment strategies, savings
          plans, and insurance products that align with clients' financial
          goals. Companies like Wealthfront and Betterment utilize AI to create
          customized financial plans, enhancing customer satisfaction and
          loyalty
        </motion.p>
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h4"
        >
          Claims Processing Automation</motion.h4>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          AI streamlines claims processing through automation and advanced
          analytics. Machine learning models can evaluate claims, assess
          damages, and even predict the likelihood of fraud, significantly
          reducing the time and resources required for claims management.
          Companies like Claim Genius and Tractable are pioneering AI-driven
          solutions that enhance the efficiency and accuracy of claims
          processing, leading to faster payouts and improved customer
          experiences.
        </motion.p>
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h4"
        >
          Risk Assessment</motion.h4>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          In the insurance industry, AI is transforming risk assessment and
          underwriting processes. Machine learning models analyze extensive
          data, including historical claims and customer profiles, to accurately
          assess risks and set appropriate premiums. This capability allows
          insurers to streamline their operations and improve the accuracy of
          their pricing strategies. Pioneering companies like Zest AI and Verisk
          Analytics are at the forefront of this application, driving efficiency
          and fairness in the underwriting process
        </motion.p>
      </div>
    </div>
  );
};

export default FinanceHero;
