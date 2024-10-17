import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogsCards = () => {
  const posts = [
    {
      id: 1,
      author: "Sam Pitak",
      date: "20 Apr 2024",
      title:
        "Beyond Transactions: Unlocking the Full Potential of Your POS System",
      description:
        "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a transaction processor...",
    },
    {
      id: 2,
      author: "Yuli Sumaji",
      date: "20 Apr 2024",
      title: "From Brick-and-Mortar to Online Storefront: Integrating POS",
      description:
        "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a basic tool...",
    },
    {
      id: 3,
      author: "Anjana Panda",
      date: "20 Apr 2024",
      title:
        "Security First: Protecting Your Business with Advanced POS Systems",
      description:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data...",
    },
    {
      id: 4,
      author: "Anjana Panda",
      date: "20 Apr 2024",
      title:
        "Security First: Protecting Your Business with Advanced POS Systems",
      description:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data...",
    },
    {
      id: 3,
      author: "Anjana Panda",
      date: "20 Apr 2024",
      title:
        "Security First: Protecting Your Business with Advanced POS Systems",
      description:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data...",
    },
    {
      id: 3,
      author: "Anjana Panda",
      date: "20 Apr 2024",
      title:
        "Security First: Protecting Your Business with Advanced POS Systems",
      description:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data...",
    },
    {
      id: 3,
      author: "Anjana Panda",
      date: "20 Apr 2024",
      title:
        "Security First: Protecting Your Business with Advanced POS Systems",
      description:
        "One of the primary functions of a POS system is to process transactions and handle sensitive customer data...",
    },
  ];

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <Card
            key={post.id}
            className=" overflow-hidden border-none shadow-none"
          >
            <div className="w-full h-[240px] relative border-2 rounded-xl">
              <img
                src="/api/placeholder/400/320"
                alt="Blog post thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            <CardHeader className="space-y-1 px-0 ">
              <div className="flex justify-between items-center text-sm ">
                <span className="text-[#FF5A00] font-semibold">
                  {post.author}
                </span>
                <span className="text-gray-600">{post.date}</span>
              </div>
              <CardTitle className="text-xl font-bold line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              <Button variant="link" className="p-0 h-auto text-[#0055A7]">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination className=" ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogsCards;
