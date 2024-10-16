import ContactCard from "@/components/layout/ContactCard";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
    
      <Nav/>

      {children}

      <Footer />
    </main>
  );
};

export default layout;
