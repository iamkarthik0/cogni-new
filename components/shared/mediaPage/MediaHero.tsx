import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const MediaHero = () => {
  return (
    <div>


         {/* --------------------------Hero Section------------------- */}
         <div className="pt-16 lg:pt-24 ">
          <h1 className="h1 lg:max-w-6xl">
            Transforming Media & Entertainment with Advanced Data Science and AI
            Solutions
          </h1>

          <Link href="/contact-us" className=" my-5">
            <Button className="btn my-6">CONSULT WITH AN AI EXPERT</Button>
          </Link>
        </div>

        <div className=" pt-6 lg:pt-10">
          <div className=" p-10 lg:p-20 space-y-5 bg-[#EEEEEE]  rounded-[23px] ">
            <h1 className=" h3">
              Introduction of Company and Why Cogninest AI is the Best for Media
              and Entertainment
            </h1>
            <p>
              Cogninest AI is a leading provider of data science and artificial
              intelligence solutions tailored to the dynamic needs of the media
              and entertainment industry. Our mission is to empower
              organizations with cutting-edge AI technologies that revolutionize
              content creation, audience engagement, and operational efficiency.
            </p>

            <p>
              We offer a comprehensive suite of services, including predictive
              analytics, machine learning, and natural language processing, that
              enable media companies to unlock new revenue streams, optimize
              content strategies, and enhance viewer experiences. Partner with
              Cogninest AI to harness the power of data and AI for a competitive
              edge in the ever-evolving media landscape.
            </p>
          </div>
        </div>

    </div>
  )
}

export default MediaHero