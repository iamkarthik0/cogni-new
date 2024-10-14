"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement your subscribe logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#054475] text-white border-t  mx-auto">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex  mb-8">
          <Image src="/logo.png" alt="Company Logo" width={143} height={79} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Case Studies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Case Study 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Case Study 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Case Study 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Case Study 1
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Predictive Modelling
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Gen AI​
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Chat GPT Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white line-clamp-5 hover:text-[#00AEEF] hover:font-medium"
                >
                  Natural Language Processing
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Machine Learning
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Data Science
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Computer Vision
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className=" text-sm text-white  hover:text-[#00AEEF] hover:font-medium  "
                >
                  Big Data
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Cloud Consultant
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Blogs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Blog 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Blog 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Blog 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Blog 1
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Blog 1
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 ">
            <h3 className="text-lg font-semibold ">About us</h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Company Info
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Terms and condition
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 ">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow rounded-full"
                />
                <Button className="btn" type="submit">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white">
            © 2023 Cogninest AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-white hover:text-[#00AEEF] hover:font-medium"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#00AEEF] hover:font-medium"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#00AEEF] hover:font-medium"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:info@example.com"
              className="text-white hover:text-[#00AEEF] hover:font-medium"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
