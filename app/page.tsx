



import { client } from "@/lib/sanity";

import { landingQuery } from "@/lib/query";
import Footer from "@/components/layout/Footer";
import ContactCard from "@/components/layout/ContactCard";
import BlogsAndCaseStudies from "@/components/shared/landingPage/blogs-and-case-studies";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import DataScienceServices from "@/components/shared/landingPage/DataScienceService";
import ClientCarousel from "@/components/shared/landingPage/client-carousel";
import AISolutionsSection from "@/components/shared/landingPage/AISolutionsSection";
import StatisticsBanner from "@/components/shared/landingPage/StaticBanner";
import InlineContact from "@/components/shared/landingPage/InlineContact";
import HeroSection from "@/components/shared/landingPage/HeroSection";
import Navbar from "@/components/layout/Navbar";




export default async function Home() {
  const data = await client.fetch(landingQuery);

  return (
    <div className="w-full h-full" >
      <Navbar />
      <HeroSection
        imgUrl={data.hero.image}
        subtitle={data.hero.subheading}
        paragraph={data.hero.paragraph}
        title={data.hero.heading}
      />
      <InlineContact />
      <StatisticsBanner  />
      <AISolutionsSection
        paragraph={data.hero2.paragraph} 
        imgUrl={data.hero2.backgroundImage}
        heading={data.hero2.heading}
      />
      <ClientCarousel  clients={data.ourclient} />
      <DataScienceServices serviceCard={data.services.ServicesCard} />
      <DataScienceConsulting services={data.consultingServices} />
      <BlogsAndCaseStudies
        cards={data.blogs.blogsCard}
        title={data.blogs.blogTitle}
      />

      <ContactCard />

      <Footer />
    </div>
  );
}
