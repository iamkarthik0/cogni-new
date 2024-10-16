"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { urlFor } from '@/lib/sanity'
interface AISolutionsSectionProps {
heading?:string,
paragraph?:any
imgUrl?:any

}
export default function AISolutionsSection(props:AISolutionsSectionProps) {
  const {heading,paragraph,imgUrl} = props
  return (
    <section className="w-full py-12 md:py-18 lg:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="h2">
             {heading}
            </h1>
            <p className="subtle-text">
              {paragraph}
            </p>
         
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className='btn'>EXPLORE MORE</Button>
            </div>
          </div>
          <div className="flex-shrink-0 mt-8 lg:mt-0 lg:w-[400px] xl:w-[600px]">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={urlFor(imgUrl).url()}
                alt="People using VR headsets with holographic displays"
                layout="fill"
               
                className="rounded-md object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}