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

const menuItems = [
  {
    title: "Industries",
    href: "/industries",
    dropdown: [
      
      { title: "Healthcare", href: "/healthcare" },
      { title: "Pharma", href: "/pharma" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    dropdown: [
      { title: "DataEngineering", href: "/data-engineering" },
      { title: "Predictive", href: "/predictive-modeling" },
      { title: "Gen AI Services", href: "/gen-ai-services" },
      { title: "ML and DL Services", href: "/ml-dl-service" },
      { title: "Data Science Services", href: "/data-science" },
      { title: "NLP Services", href: "/nlp-service" },
    ],
  },
  { title: "Case Studies", href: "/case-studies" },
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
                    isActive(item.href)
                      ? "text-[#00AEEF]"
                      : "text-gray-600"
                  }`}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className={`block p-2 text-sm ${
                          isActive(dropdownItem.href)
                            ? "text-[#00AEEF]"
                            : "subtle-text hover:text-gray-800"
                        } hover:bg-gray-100 rounded-md`}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </>
            ) : (
              <AccordionTrigger
                className={`${
                  isActive(item.href)
                    ? "text-[#00AEEF]"
                    : "text-gray-600"
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
    <nav className="bg-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={182}
                height={100}
                className="w-auto h-[50px] md:h-[100px]"
              />
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
                              <li key={dropdownItem.title}>
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
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
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
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="btn">GET STARTED</Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="mobile-menu-button p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 bg-[#00AEEF] font-bold text-white text-xl">
                    <span>Menu</span>
                  </div>
                  <div className="flex-grow p-6 overflow-y-auto">
                    <MobileMenu />
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <Button className="w-full btn py-2 px-4 rounded">
                      GET STARTED
                    </Button>
                  </div>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-8 w-8 text-white" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;