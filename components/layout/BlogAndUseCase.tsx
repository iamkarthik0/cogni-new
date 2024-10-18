"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Item = {
  title: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    title: "Blog related AI",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/blog-image.jpg"
  },
  {
    title: "Use case",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/use-case-image.jpg"
  },
  {
    title: "Blog",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/another-blog-image.jpg"
  }
];

type BlogItemProps = {
  title: string;
  description: string;
  image: string;
  index: number;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        className="relative w-[212px] aspect-square mb-4 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/"
          alt={title}
          fill
          className="bg-[#1B255E] object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className="font-semibold text-lg mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="text-sm text-gray-600"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const BlogsAndUseCases: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Blogs and Use Cases
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item: Item, index: number) => (
          <BlogItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogsAndUseCases;