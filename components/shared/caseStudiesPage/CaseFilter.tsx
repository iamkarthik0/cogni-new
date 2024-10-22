"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CaseFilter = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" flex max-w-2xl gap-5 items-center lg:mx-16 mx-10 ">
      {pathname === "/case-studies" ? (
        <Link href="/case-studies">
          {" "}
          <Button className="btn  shadow-md "> All Category</Button>
        </Link>
      ) : (
        <Link href="/case-studies">
          {" "}
          <Button className=" shadow-md rounded-full" variant="outline">
            {" "}
        All Category
          </Button>
        </Link>
      )}

      {pathname === "/case-studies/services" ? (
        <Link href="/case-studies/services">
          {" "}
          <Button className="btn  shadow-md "> Services</Button>
        </Link>
      ) : (
        <Link href="/case-studies/services">
          {" "}
          <Button className=" shadow-md rounded-full" variant="outline">
            {" "}
            Services
          </Button>
        </Link>
      )}    

      {pathname === "/case-studies/industry" ? (
        <Link href="/case-studies/industry">
          {" "}
          <Button className="btn  shadow-md "> Industry</Button>
        </Link>
      ) : (
        <Link href="/case-studies/industry">
          {" "}
          <Button className=" shadow-md rounded-full" variant="outline">
            {" "}
            Industry
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CaseFilter;
