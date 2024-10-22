"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer



const BlogContent = (props: any) => {
  const { img, heading, paragraph } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="flex flex-col gap-y-4  items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={img} alt="blogcard" width={350} height={223} />
          <h3 className="h4 space-y-3">{heading}</h3>
          <p className="space-y-5">{paragraph}</p>
        </motion.div>
      </div>
    </>
  );
};

const BlogCard = (props:any) => {
  return (
    <div>
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-12 w-[100%] h-[100%]">
        {props.data.map((data:any, index:any) => (
          <BlogContent
            key={index}
            img={data.img}
            heading={data.heading}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
