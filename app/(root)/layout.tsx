import ContactCard from "@/components/layout/ContactCard";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { Toaster } from "@/components/ui/toaster";

import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
    
     <div className=" max-w-screen-2xl bg-white  sticky top-0 z-50 mx-auto">
     <Nav/>
     </div>

      {children}
      <Toaster />
      <Footer />
    </main>
  );
};

export default layout;
