import ContactCard from "@/components/ui/layout/ContactCard";
import Footer from "@/components/ui/layout/Footer";
import HeroSection from "@/components/ui/layout/HeroSection";
import InlineContact from "@/components/ui/shared/InlineContact";
import Navbar from "@/components/ui/layout/Navbar";
import { client } from "@/lib/sanity";
import StatisticsBanner from "@/components/ui/shared/StaticBanner";
import AISolutionsSection from "@/components/ui/shared/AISolutionsSection";
import DataScienceServices from "@/components/ui/shared/DataScienceService";
import DataScienceConsulting from "@/components/ui/shared/DataScienceConsulting";
import BlogsAndCaseStudies from "@/components/ui/shared/blogs-and-case-studies";
import ClientCarousel from "@/components/ui/shared/client-carousel";
const query = `*[_type == "landingPage"][0]`

export default async function Home() {
  // const data =  await client.fetch(query)

  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroSection/>
      <InlineContact/>
      <StatisticsBanner/>
      <AISolutionsSection/>
      <ClientCarousel/>
      <DataScienceServices/>
      <DataScienceConsulting/>
      <BlogsAndCaseStudies/>
   
      <ContactCard/>

      <Footer/>
    </div>
  );
}
