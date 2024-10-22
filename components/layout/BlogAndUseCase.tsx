'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Item = {
  title: string
  description: string
  image: string
}

const items: Item[] = [
  {
    title: "Blog related AI",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/placeholder.svg?height=212&width=212"
  },
  {
    title: "Use case",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/placeholder.svg?height=212&width=212"
  },
  {
    title: "Blog",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/placeholder.svg?height=212&width=212"
  }
]

type BlogItemProps = {
  title: string
  description: string
  image: string
  index: number
}

const BlogItem: React.FC<BlogItemProps> = ({ title, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        className="relative w-[212px] aspect-square mb-4 overflow-hidden rounded-lg shadow-lg"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="bg-primary object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
        className="font-semibold text-lg mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
        className="text-sm text-muted-foreground"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

const BlogsAndUseCases: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12"
      >
        Blogs and Use Cases
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {items.map((item: Item, index: number) => (
          <BlogItem key={index} {...item} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default BlogsAndUseCases