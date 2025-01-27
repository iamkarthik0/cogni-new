"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

export const BusinessBenefits = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className=" space-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="h2 text-center"
      >
        Business benefits
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className=" text-center paragraph font-semibold"
      >
        How AI supports finance and insurance industry
      </motion.p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" space-y-4 bg-[#EEEEEE] rounded-[23px] p-4 lg:p-8">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className=" paragraph font-bold"
          >
            Increased Efficiency and Productivity
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            AI automates repetitive and time-consuming tasks, allowing employees
            to focus on higher-value activities. This automation streamlines
            operations, reduces human error, and accelerates processes such as
            claims management and underwriting. As a result, organizations
            experience improved efficiency and productivity, ultimately leading
            to cost savings and enhanced operational performance...
          </motion.p>
        </div>

        <div className=" space-y-4 bg-[#EEEEEE] rounded-[23px] p-4 lg:p-8">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className=" paragraph font-bold"
          >
            Cost Reduction
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            The integration of AI technologies helps organizations reduce
            operational costs by optimizing processes and minimizing resource
            requirements. For instance, AI-driven automation in claims
            processing can lead to significant annual savings by decreasing the
            need for manual labor and expediting claim resolutions. These cost
            efficiencies enable companies to allocate resources more effectively
            and invest in innovation...
          </motion.p>
        </div>

        <div className=" space-y-4 bg-[#EEEEEE] rounded-[23px] p-4 lg:p-8">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className=" paragraph font-bold"
          >
            Regulatory Compliance and Reporting
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            AI can streamline compliance processes by automating the monitoring
            and reporting required to adhere to regulatory standards. Machine
            learning algorithms can analyze transactions and customer
            interactions to ensure compliance with laws and regulations,
            reducing the risk of fines and penalties. By improving accuracy and
            efficiency in compliance reporting, organizations can focus more on
            strategic initiatives while maintaining regulatory integrity...
          </motion.p>
        </div>

        <div className=" space-y-4 bg-[#EEEEEE] rounded-[23px] p-4 lg:p-8">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className=" paragraph font-bold"
          >
            Data-Driven Decision Making
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            AI empowers organizations to make informed, data-driven decisions by
            providing deep insights and predictive analytics. By analyzing
            historical data and market trends, AI systems can identify
            opportunities and risks that may not be immediately apparent. This
            capability enables finance and insurance companies to refine their
            strategies, optimize product offerings, and enhance overall business
            performance...
          </motion.p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div className=" space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h2   "
        >
          AI in Finance and Insurance: Implementation challenges
        </motion.h1>

        {/* ------------------------------------ */}
        <div className=" flex flex-col lg:flex-row  gap-4 lg:gap-0 lg:pt-8 pt-6">
          <div className=" flex  justify-center items-center flex-col lg:flex-row gap-4 lg:w-2/5 order-last lg:order-first ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className=" paragraph order-last lg:order-first bg-[#EEEEEE] py-3 px-6 rounded-[23px] text-center"
            >
              Insufficient or Low-Quality Data
            </motion.p>
            <Image
              src="/arrow.png"
              alt="arrow"
              height={75}
              width={75}
              className=" w-[40px] lg:w-[60px]  -rotate-90 lg:rotate-0"
            />
          </div>

          <div className=" bg-[#EEEEEE] px-7 py-3 rounded-[23px] lg:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Data quality is essential for the success of AI implementations.
              Many organizations face challenges in providing sufficient,
              high-quality data for training AI models, which can result in
              biased or inaccurate outcomes. Ensuring clean, reliable, and
              comprehensive data is critical to building AI systems that
              generate trustworthy insights and drive meaningful business
              results. At Cogninest AI, we focus on enhancing data quality to
              deliver accurate and unbiased AI-driven solutions that empower
              your business.
            </motion.p>
          </div>
        </div>
        {/* ------------------------------------ */}

        {/* ------------------------------------ */}
        <div className=" flex flex-col lg:flex-row  gap-4 lg:gap-0">
          <div className=" flex  justify-center items-center flex-col lg:flex-row gap-4 lg:w-2/5 order-last lg:order-first ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className=" paragraph order-last lg:order-first bg-[#EEEEEE] py-3 px-6 rounded-[23px] text-center"
            >
              Outdated Infrastructure
            </motion.p>
            <Image
              src="/arrow.png"
              alt="arrow"
              height={75}
              width={75}
              className=" w-[40px] lg:w-[60px]  -rotate-90 lg:rotate-0"
            />
          </div>

          <div className=" bg-[#EEEEEE] px-7 py-3 rounded-[23px] lg:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Implementing AI requires advanced infrastructure that can rapidly
              process large volumes of data. Many companies still rely on
              outdated systems that lack the capacity to support the demands of
              AI technologies. Upgrading to modern, scalable infrastructure is
              crucial for maximizing the potential of AI, enabling businesses to
              process data efficiently and gain valuable insights. At Cogninest
              AI, we help organizations modernize their infrastructure, ensuring
              they are ready to fully leverage the power of AI.
            </motion.p>
          </div>
        </div>
        {/* ------------------------------------ */}

        {/* ------------------------------------ */}
        <div className=" flex flex-col lg:flex-row  gap-4 lg:gap-0">
          <div className=" flex  justify-center items-center flex-col lg:flex-row gap-4 lg:w-2/5 order-last lg:order-first ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className=" paragraph order-last lg:order-first bg-[#EEEEEE] py-3 px-6 rounded-[23px] text-center"
            >
              Ethical and Regulatory Concerns
            </motion.p>
            <Image
              src="/arrow.png"
              alt="arrow"
              height={75}
              width={75}
              className=" w-[40px] lg:w-[60px]  -rotate-90 lg:rotate-0"
            />
          </div>

          <div className=" bg-[#EEEEEE] px-7 py-3 rounded-[23px] lg:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              The adoption of AI brings forth a range of ethical and regulatory
              challenges, such as data privacy, bias, and accountability.
              Organizations must carefully navigate complex legal frameworks
              while ensuring their AI systems are transparent, fair, and
              compliant. At Cogninest AI, we prioritize ethical AI development,
              helping businesses build solutions that not only meet regulatory
              standards but also foster trust and accountability in their
              operations.
            </motion.p>
          </div>
        </div>
        {/* ------------------------------------ */}

        {/* ------------------------------------ */}
        <div className=" flex flex-col lg:flex-row  gap-4 lg:gap-0">
          <div className=" flex  justify-center items-center flex-col lg:flex-row gap-4 lg:w-2/5 order-last lg:order-first ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className=" paragraph order-last lg:order-first bg-[#EEEEEE] py-3 px-6 rounded-[23px] text-center"
            >
              Lack of AI Talent
            </motion.p>
            <Image
              src="/arrow.png"
              alt="arrow"
              height={75}
              width={75}
              className=" w-[40px] lg:w-[60px]  -rotate-90 lg:rotate-0"
            />
          </div>

          <div className=" bg-[#EEEEEE] px-7 py-3 rounded-[23px] lg:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              The rapid evolution of AI technologies has led to a significant
              skills gap in the workforce. Many organizations face challenges in
              finding qualified professionals with the expertise required to
              develop and implement AI solutions effectively. At Cogninest AI,
              we help businesses overcome this skills shortage by providing
              expert consulting and training, ensuring your team is equipped to
              harness the full potential of AI technologies and drive innovation
              within your organization.
            </motion.p>
          </div>
        </div>
        {/* ------------------------------------ */}
      </div>
    </motion.div>
  );
};
