"use client";
import FeatureCard from "@/components/layout/FeatureCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ComputerMainSection = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [section1Ref, section1InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section2Ref, section2InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section3Ref, section3InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section4Ref, section4InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section5Ref, section5InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [featureCard, featureCardInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [explore, exploreInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const features = [
    {
      title: "Face recognition",
      description:
        "Facial recognition services extend beyond security to enhance the user experience. Identify and authenticate a specific person by their facial features in an image or video. With our trained AI models and face detection service, we measure and calculate several facial representations to accurately confirm the identity of individuals.",
      variant: "gray",
    },
    {
      title: "Emotion recognition",
      description:
        "Sentiment analysis models analyze customer data from a variety of sources including social media, customer reviews, drone footage, mass media and data. They achieve a visual representation of customers’ opinions and sentiments about your brand, based on text data.",
      variant: "gray",
    },
    {
      title: "Video analytics",
      description:
        "Detect and extract objects from video based on trained AI models. then classify each object to enable intelligent video analysis to empower users with granular search, smart alerting and comprehensive reporting.",
      variant: "gray",
    },
    {
      title: "Optical character recognition",
      description:
        "OCR services convert data into machine-editable text. It is the most-effective solution to capture data from printed or written text from a scanned document or image file. OCR ensures high-quality data conversion that is fast, accurate and efficient.",
      variant: "gray",
    },
    {
      title: "Image annotation",
      description:
        "Label your images and take control of your training data while powering your computer vision apps with large data sets. Our image annotation services support image classification, object detection and recognition using tools like bounding box, polygon, polyline and key point annotation.",
      variant: "gray",
    },

    {
      title: "Object detection",
      description:
        "Identify multiple objects in an image and receive information about the location of the object in the image. Empower your enterprise-level apps with custom models that are capable of detecting individual objects in a given image along with their bounding box and label using our object detection service.",
      variant: "gray",
    },
  ];
  return (
    <div>
      <div className=" pt-10 lg:pt-20 ">
        <div className=" space-y-16 ">
          <h2 className="h2  lg:max-w-3xl  lg:py-8 ">
            Some of the business use cases of Computer Vision AI services
          </h2>

          <div className=" space-y-24">
            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 ">
                <h1 className=" h4">Computer vision in manufacturing</h1>
                <p>
                  Images from cameras placed on the assembly line of 7 factories
                  helped detect and prevent 112 component failures. No human
                  skill/experience can match CV’s ability to achieve cent
                  percent uptime, zero defect manufacturing and a consistent
                  product line.
                </p>
                <ul className=" list-disc pl-4">
                  <li>Produce flawless products</li>
                  <li>Ensure a safe working environment</li>
                  <li>Real-time optical character recognition</li>
                  <li>Equipment monitoring and predictive maintenance</li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Boost Productivity And Profitability
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv1.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>

            {/* ------------------------------------------ */}

            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={section1Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={
                section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 order-first lg:order-last">
                <h1 className=" h4">Computer vision for the FMCG industry</h1>
                <p>
                  Ensure better customer engagement with computer vision.
                  Improve efficiency, accuracy and profitability in the
                  following areas of your business operation:
                </p>
                <ul className=" list-disc pl-4">
                  <li>Quality control</li>
                  <li>Packaging</li>
                  <li>Inventory management</li>
                  <li>ECustomer behavior analysis</li>
                  <li>Retail automation</li>
                  <li>Shelf optimization</li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Explore Computer Vision Solutions
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv2.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>

            {/* ------------------------------------------ */}

            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={section2Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={
                section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 ">
                <h1 className=" h4">
                  Computer Vision for Quality Control in Electronics
                </h1>
                <p>
                  Tired of manual inspections missing subtle defects on your
                  PCBs? Stop hidden defects from hindering your production. Our
                  AI-powered computer vision solutions meticulously inspect
                  PCBs, ensuring consistent quality and maximizing yield.
                  Computer vision with AI could really help you with:
                </p>
                <ul className=" list-disc pl-4">
                  <li>
                    Detect even the subtlest anomalies invisible to human
                    inspectors
                  </li>
                  <li>
                    Automate visual inspections, Focus on high-value tasks
                  </li>
                  <li>
                    Seamless Integration of a scalable solutions to existing
                    line.
                  </li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Boost Productivity And Profitability
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv3.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>

            {/* ------------------------------------------ */}

            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={section3Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={
                section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 order-first lg:order-last">
                <h1 className=" h4">Smart leak detection</h1>
                <p>
                  Constant monitoring and maintenance make the best use of
                  remote assets. Factors like outside force, corrosion, operator
                  error, weld defects and aging trigger leaks in water,
                  petroleum and process plants’ pipelines. CV continuously
                  tracks flow rate, pressure and temperature for leak detection.
                </p>
                <ul className=" list-disc pl-4">
                  <li>Non-destructive testing and inspection</li>
                  <li>Automatic leak detection and alerts raise</li>
                  <li>Distinguish hazardous and non-hazardous spills.</li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Boost Productivity And Profitability
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv4.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>

            {/* ------------------------------------------ */}

            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={section4Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={
                section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 ">
                <h1 className=" h4">
                  Computer vision-powered facility management
                </h1>
                <p>
                  With the help of advanced cameras and image processing
                  algorithms, computer vision systems for facility management
                  can capture and analyze images and videos of huge public
                  spaces. This provides valuable insights into the operations of
                  the facility.
                </p>
                <ul className=" list-disc pl-4">
                  <li>Improve building security and protocol</li>
                  <li>Monitors the movement of crowd and vehicle</li>
                  <li>Facility space optimization in real-time</li>
                  <li>Identify any maintenance needs</li>
                  <li>Inspect the exterior of buildings for bottlenecks</li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Boost Productivity And Profitability
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv5.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>

            {/* ------------------------------------------ */}

            {/* ------------------------------------------ */}
            <motion.div
              className=" relative flex  flex-col lg:flex-row"
              ref={section5Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={
                section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className=" flex-1 space-y-4 order-first lg:order-last">
                <h1 className=" h4">Computer vision apps in retail</h1>
                <p>
                  Using computer vision for retail facility management can
                  improve efficiency and customer satisfaction. The use of
                  computer vision in retail can improve operational efficiency,
                  reduce costs, and improve customer service.
                </p>
                <ul className=" list-disc pl-4">
                  <li>Monitors the store environment</li>
                  <li>Optimizes store layout and product placement</li>
                  <li>Tracks the occupancy of shelves</li>
                  <li>Optimize traffic flow and minimize congestion</li>
                  <li>
                    Detects suspicious behavior and alerts staff in real-time
                  </li>
                </ul>

                <div className="py-4">
                  {" "}
                  <Button className="btn ">
                    Boost Productivity And Profitability
                  </Button>
                </div>
              </div>

              <div className=" flex-1">
                <Image
                  src="/cv6.png"
                  alt="business "
                  width={539}
                  height={396}
                />
              </div>
            </motion.div>
          </div>
          {/* ------------------------------------------ */}
        </div>

        <div>
          <div className="  space-y-10 pt-16 lg:pt-20">
            <h1 className="h3  lg:max-w-1/2">
              Some of our computer vision consulting services include
            </h1>
            <div
              className=" grid grid-cols-1 lg:grid-cols-2 gap-8  "
              ref={featureCard}
            >
              {features.map((data, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    featureCardInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <FeatureCard
                    key={index}
                    variant={data.variant}
                    title={data.title}
                    description={data.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div ref={explore} className=" space-y-16 lg:pt-20 pt-16" 
                 initial={{ opacity: 0, y: 20 }}
                 animate={
                  exploreInView
                     ? { opacity: 1, y: 0 }
                     : { opacity: 0, y: 20 }
                 }
                 transition={{ duration: 0.5 }}
        
        >
          <h1 className="h2 text-center">Explore more services</h1>

          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <div className=" group lg:w-[271px] h-[271px] bg-[#D9D9D9] hover:bg-[#0055A7] flex justify-center items-center text-center p-6 cursor-pointer">
              <p className=" group-hover:text-white">
                Have a large set of documents that need thorough analysis?
              </p>
            </div>

            <div className=" group lg:w-[271px]  h-[271px] bg-[#D9D9D9] hover:bg-[#0055A7] flex justify-center items-center text-center p-6 cursor-pointer">
              <p className=" group-hover:text-white">
                Looking to detect common topics across a collection of texts?
              </p>
            </div>

            <div className=" group lg:w-[271px]  h-[271px] bg-[#D9D9D9] hover:bg-[#0055A7] flex justify-center items-center text-center p-6 cursor-pointer">
              <p className=" group-hover:text-white">
                Need assistance in organizing and prioritizing emails?
              </p>
            </div>

            <div className=" group lg:w-[271px]  h-[271px] bg-[#D9D9D9] hover:bg-[#0055A7] flex justify-center items-center text-center p-6 cursor-pointer">
              <p className=" group-hover:text-white">
                Want to identify leading experts in a scientific field based
                their publication output?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComputerMainSection;
