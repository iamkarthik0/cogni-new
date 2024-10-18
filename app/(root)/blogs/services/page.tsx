import PaginationControl from "@/components/layout/PaginationControl";
import BlogsCards from "@/components/shared/blogPage/BlogsCard";
import Filter from "@/components/shared/blogPage/Filter";
import { getData } from "@/lib/getData";
import React from "react";

const page = async ({
  searchParams,
}: {
  params: { category: string };
  searchParams: { page?: string };
}) => {
  const currentPage = Number(searchParams.page) || 1;

  const pageSize = 2;

  const { items, totalPages } = await getData("service", currentPage, pageSize);

  return (
    <>
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" pt-16 lg:pt-16">
          <div className=" text-center max-w-2xl mx-auto space-y-6">
            <p className="subtle-text font-semibold"> COGNINEST AI NEWS</p>
            <h1 className="h1">Grow your Services with AI and NLP</h1>
          </div>
        </div>
        <div className=" lg:pt-10">
          <Filter />
        </div>

        {/* ----------------------------------items------------------- */}

        <div className=" pt-16 lg:pt-24">
          <BlogsCards data={items} />
        </div>

        <div>
          <PaginationControl
            category="services"
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default page;
