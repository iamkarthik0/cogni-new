'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ClientCarousel(props:any) {
  const {clients} = props
  const [api, setApi] = React.useState<any>()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8" ref={ref}>
      <motion.h2 
        className="h2 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Our Clients
      </motion.h2>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0 flex">
          {clients.map((client:any, index:any) => (
            <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/4 border">
              <motion.div 
                className="flex items-center justify-center p-4 h-24 border-r last:border-r-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={urlFor(client.client).url()}
                  alt="car"
                  width={150}
                  height={50}
                  className="max-w-full h-auto max-h-full object-contain"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}