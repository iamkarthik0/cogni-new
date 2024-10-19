"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { urlFor } from '@/lib/sanity'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AISolutionsSectionProps {
  heading?: string,
  paragraph?: any
  imgUrl?: any
}

export default function AISolutionsSection(props: AISolutionsSectionProps) {
  const { heading, paragraph, imgUrl } = props
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full py-12 md:py-18 lg:py-24 bg-white" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="flex-1 space-y-4">
            <motion.h1 
              className="h2"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
            >
              {heading}
            </motion.h1>
            <motion.p 
              className="subtle-text"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {paragraph}
            </motion.p>
         
            <motion.div 
              className="flex flex-col sm:flex-row gap-2"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" ><Button className='btn hover:scale-105 transition-transform duration-300'>EXPLORE MORE</Button></Link>
            </motion.div>
          </div>
          <motion.div 
            className="flex-shrink-0 mt-8 lg:mt-0 lg:w-[400px] xl:w-[600px]"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={urlFor(imgUrl).url()}
                alt="People using VR headsets with holographic displays"
                layout="fill"
                className="rounded-md object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}