"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" flex max-w-2xl gap-5 items-center lg:mx-16 mx-10 ">
      {pathname === "/blogs" ? (
        <Link href="/blogs">
          {" "}
          <Button className="btn  shadow-md "> All Category</Button>
        </Link>
      ) : (
        <Link href="/blogs">
          {" "}
          <Button className=" shadow-md rounded-full" variant="outline">
            {" "}
        All Category
          </Button>
        </Link>
      )}

      {pathname === "/blogs/services" ? (
        <Link href="/blogs/services">
          {" "}
          <Button className="btn  shadow-md "> Services</Button>
        </Link>
      ) : (
        <Link href="/blogs/services">
          {" "}
          <Button className=" shadow-md rounded-full" variant="outline">
            {" "}
            Services
          </Button>
        </Link>
      )}    

      {pathname === "/blogs/industry" ? (
        <Link href="/blogs/industry">
          {" "}
          <Button className="btn  shadow-md "> Industry</Button>
        </Link>
      ) : (
        <Link href="/blogs/industry">
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

export default Filter;
