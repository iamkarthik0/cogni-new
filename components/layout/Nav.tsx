"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Industries",
    href: "/industries",
    dropdown: [
      { title: "Healthcare", href: "/healthcare" },
      { title: "Pharma", href: "/pharma" },
      { title: " CPG-Industry", href: "/cpg-industry" },
      { title: " Media", href: "/media" },
      { title: " Retail", href: "/retail" },
      { title: "Manufacturing", href: "/ai-manufacturing" },

      { title: "Energy", href: "/energy-industry" },
      { title: "Finance", href: "/ai-finance" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    dropdown: [
      { title: "Gen AI Services", href: "/gen-ai-services" },
      { title: "NLP Services", href: "/nlp-service" },
      { title: "Data Science Services", href: "/data-science" },
      { title: "ML and DL Services", href: "/ml-dl-service" },
      { title: "Data Engineering", href: "/data-engineering" },
      { title: "Predictive Analytics", href: "/predictive-modeling" },
      { title: "Chat GPT Integration", href: "/gpt-integration" },
      { title: "Document AI Services", href: "/document-ai-services" },
      { title: "Cloud Consultant ", href: "/cloud-consultant" },
      { title: "Computer Vision", href: "/computer-vision" },
      { title: "Deep Learning", href: "/deep-learning" },
      { title: "Next-Gen Data Solutions", href: "/next-gen" },
      { title: "IDP", href: "/idp" },

      
     

     
    ],
  },
  { title: "Case Studies", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "About Us", href: "/about-us" },
];

const Nav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const MobileMenu = () => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {menuItems.map((item) => (
          <AccordionItem value={item.title} key={item.title}>
            {item.dropdown ? (
              <>
                <AccordionTrigger
                  className={`${
                    isActive(item.href) ? "text-[#00AEEF]" : "text-gray-600"
                  }`}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 space-y-2"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <motion.div
                        key={dropdownItem.title}
                        whileHover={{ scale: 1.05, rotate: 2, x: 5 }}
                        whileTap={{ scale: 0.95, rotate: -2, x: -5 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={dropdownItem.href}
                            className={`block p-2 text-sm ${
                              isActive(dropdownItem.href)
                                ? "text-[#00AEEF]"
                                : "subtle-text hover:text-gray-800"
                            } hover:bg-gray-100 rounded-md`}
                          >
                            {dropdownItem.title}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </motion.div>
                </AccordionContent>
              </>
            ) : (
              <AccordionTrigger
                className={`${
                  isActive(item.href) ? "text-[#00AEEF]" : "text-gray-600"
                }`}
              >
                <Link href={item.href} className="w-full text-left">
                  {item.title}
                </Link>
              </AccordionTrigger>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className=""
    >
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4">
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={182}
                  height={100}
                  className="w-auto h-[50px] md:h-[100px]"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger
                          className={`font-semibold focus:bg-[#F2F2F2] subtle-text ${
                            isActive(item.href)
                              ? "text-[#00AEEF]"
                              : "text-gray-600"
                          }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[250px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                            {item.dropdown.map((dropdownItem) => (
                              <motion.li
                                key={dropdownItem.title}
                                whileHover={{ scale: 1.05, x: 5, y: -2 }}
                                whileTap={{ scale: 0.95, x: -5, y: 2 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={dropdownItem.href}
                                    className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${
                                      isActive(dropdownItem.href)
                                        ? "bg-[#F2F2F2] text-[#00AEEF]"
                                        : "hover:bg-[#F2F2F2] hover:text-accent-foreground"
                                    } focus:bg-[#F2F2F2] focus:text-accent-foreground`}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {dropdownItem.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </motion.li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95, y: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`font-semibold px-3 py-2 rounded-md no-underline ${
                            isActive(item.href)
                              ? "text-[#00AEEF]"
                              : "subtle-text"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact-us">
                {" "}
                <Button className="btn">GET STARTED</Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9, rotate: -180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mobile-menu-button p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  <Menu className="h-6 w-6" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex flex-col h-full"
                >
                  <motion.div
                    className="p-4 bg-[#00AEEF] font-bold text-white text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Menu</span>
                  </motion.div>
                  <div className="flex-grow p-6 overflow-y-auto">
                    <MobileMenu />
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95, rotate: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button className="w-full btn py-2 px-4 rounded">
                        GET STARTED
                      </Button>
                    </motion.div>
                  </div>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9, rotate: -90 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <X className="h-8 w-8 text-white" />
                    </motion.div>
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
