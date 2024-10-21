"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FooterForm from "./FooterForm";

export default function Footer() {
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
                  href="/gen-ai-services"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Gen AI Service
                </Link>
              </li>
              <li>
                <Link
                  href="/nlp-service"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  NLP Services
                </Link>
              </li>
              <li>
                <Link
                  href="/data-science"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Data Science Services
                </Link>
              </li>
              <li>
                <Link
                  href="/data-engineering"
                  className=" text-sm text-white line-clamp-5 hover:text-[#00AEEF] hover:font-medium"
                >
                  Data Engineering
                </Link>
              </li>

              <li>
                <Link
                  href="/predictive-modeling"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Predictive Analytics
                </Link>
              </li>

              <li>
                <Link
                  href="/gpt-integration"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Chat GPT Integration
                </Link>
              </li>

              <li>
                <Link
                  href="/document-ai-services"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Document AI Services
                </Link>
              </li>

              <li>
                <Link
                  href="/cloud-consultant"
                  className=" text-sm text-white  hover:text-[#00AEEF] hover:font-medium  "
                >
                  Cloud Consultant
                </Link>
              </li>

              <li>
                <Link
                  href="/computer-vision"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Computer Vision
                </Link>
              </li>

              <li>
                <Link
                  href="/deep-learning"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Deep Learning
                </Link>
              </li>

         

              <li>
                <Link
                  href="/next-gen"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
              Next-Gen Data Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/idp"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                 IDP
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industry</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/healthcare"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  HealthCare
                </Link>
              </li>
              <li>
                <Link
                  href="/pharma"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Pharma
                </Link>
              </li>
              <li>
                <Link
                  href="/cpg-industry"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  CPG-Industry
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/retail"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Retail
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-manufacturing"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Manufacturing
                </Link>
              </li>

              <li>
                <Link
                  href="/energy-industry"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Energy
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-finance"
                  className=" text-sm text-white hover:text-[#00AEEF] hover:font-medium "
                >
                  Finance
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
        <div className=" col-span-2 flex  justify-center ">
            
        <FooterForm /> 
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
