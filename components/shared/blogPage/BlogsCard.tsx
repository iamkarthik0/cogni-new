import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogsCards = (props: any) => {


  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {props.data.map((post: any) => (
          <Card
            key={post._id}
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
                {/* <span className="text-gray-600">{post.date}</span> */}
              </div>
              <CardTitle className="text-xl font-bold line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <p className="text-gray-600 mb-4 line-clamp-2">{post.body}</p>
              <Button variant="link" className="p-0 h-auto text-[#0055A7]">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogsCards;
