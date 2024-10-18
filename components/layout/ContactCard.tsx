"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactCard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center max-w-5xl mx-auto"
    >
      <div className="space-y-6">
        <motion.h2 
          className="h2"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          What we can do for you?
        </motion.h2>
        <motion.p 
          className="md:text-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Unlock the Power of Data: Transform Raw Information into <br></br> Valuable Insights
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className="btn hover:scale-105 transition-transform duration-300">
            CONTACT US
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}