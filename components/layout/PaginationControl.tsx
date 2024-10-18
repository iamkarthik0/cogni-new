"use client"
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import { useRouter } from "next/navigation";

const PaginationControl = ({ currentPage, totalPages, category }: any) => {


 
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
          href={`/blogs/${category}?page=${Math.max(1, currentPage - 1)}`}
          aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`/blogs/${category}?page=${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
        <PaginationNext
              href={`/blogs/${category}?page=${Math.min(totalPages, currentPage + 1)}`}
              aria-disabled={currentPage === totalPages}
            />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControl;
