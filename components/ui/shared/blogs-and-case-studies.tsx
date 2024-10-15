import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const blogPosts = [
  {
    title: "Future Tech Exploring The Latest Gadgets",
    author: "Your Name",
    date: "Nov 18, 2025",
    description:
      "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled Any......",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Future Tech Exploring The Latest Gadgets",
    author: "Your Name",
    date: "Nov 18, 2025",
    description:
      "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled Any......",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Future Tech Exploring The Latest Gadgets",
    author: "Your Name",
    date: "Nov 18, 2025",
    description:
      "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled Any......",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Future Tech Exploring The Latest Gadgets",
    author: "Your Name",
    date: "Nov 18, 2025",
    description:
      "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled Any......",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function BlogsAndCaseStudies() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Blogs and Case Studies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="border-none  overflow-hidden rounded-none"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="w-[50%] absolute bottom-0 left-0 right-0 bg-[#0055A7] text-white px-2 py-1 text-xs">
                  Technology
                </div>
              </div>
              <CardContent className="p-4 sm:w-2/3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm ">{post.author}</span>
                  <span className="text-sm ">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm ">{post.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
