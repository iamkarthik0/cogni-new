"use client";
import React, { useState } from "react";
import { ResponsiveImage } from "./ResponsiveImage";
import { Button } from "../button";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
const navItems = [
  { name: "Industries", href: "/" },
  { name: "Services", href: "/Services" },
  { name: "Case Studies", href: "/caseStudies" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 flex justify-between items-center">
        <div className=" ">
          <ResponsiveImage
            src="/logo.png"
            alt="logo"
            className=" w-[182px] h-[100px]"
          />
        </div>

        <div className="flex-1 hidden justify-end pr-12  gap-4 lg:gap-6 font-semibold lg:flex  ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={` ${pathname === item.href ? "text-[#00AEEF]" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          </div>
          <Button className="btn max-lg:hidden">GET STARTED</Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-[#00AEEF] text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="px-2 space-y-1">
            <Button className="btn ">GET STARTED</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
