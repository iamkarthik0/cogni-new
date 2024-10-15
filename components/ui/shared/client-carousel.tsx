'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect } from "react"
import Image from "next/image"

const clients = [
  { name: "ntrillo", logo: "/client.png" },
  { name: "MES", logo: "/placeholder.svg?height=50&width=150" },
  { name: "GGZ", logo: "/placeholder.svg?height=50&width=150" },
  { name: "EL ELCO Lighting", logo: "/placeholder.svg?height=50&width=150" },
  { name: "Circular Logo", logo: "/placeholder.svg?height=50&width=150" },
  { name: "Appl", logo: "/placeholder.svg?height=50&width=150" },
]

export default function ClientCarousel() {
  const [api, setApi] = React.useState<any>()

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 ">
      <h2 className="h2 text-center mb-8">Our Clients</h2>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0 flex ">
          {clients.map((client, index) => (
            <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/4 border">
              <div className="flex items-center justify-center p-4 h-24 border-r last:border-r-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={50}
                  className="max-w-full h-auto max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}