import ContactCard from "@/components/ui/layout/ContactCard";
import Footer from "@/components/ui/layout/Footer";
import HeroSection from "@/components/ui/layout/HeroSection";
import InlineContact from "@/components/ui/shared/InlineContact";
import Navbar from "@/components/ui/layout/Navbar";
import { client } from "@/lib/sanity";
import StatisticsBanner from "@/components/ui/shared/StaticBanner";
import AISolutionsSection from "@/components/ui/shared/AISolutionsSection";
import DataScienceServices from "@/components/ui/shared/DataScienceService";

import BlogsAndCaseStudies from "@/components/ui/shared/blogs-and-case-studies";
import ClientCarousel from "@/components/ui/shared/client-carousel";
import { landingQuery } from "@/lib/query";
import DataScienceConsulting from "@/components/ui/layout/DataScienceConsulting";



export default async function Home() {
  const data = await client.fetch(landingQuery);

  return (
    <div className="w-full h-full">
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
      <ClientCarousel clients={data.ourclient} />
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
