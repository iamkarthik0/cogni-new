import ContactCard from "@/components/ui/layout/ContactCard";
import Footer from "@/components/ui/layout/Footer";
import Navbar from "@/components/ui/layout/Navbar";


export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <ContactCard/>
      <Footer/>
    </div>
  );
}
