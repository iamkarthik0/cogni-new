import React from 'react';
import Image from 'next/image';

type Item = {
  title: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    title: "Blog related AI",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/blog-image.jpg"
  },
  {
    title: "Use case",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/use-case-image.jpg"
  },
  {
    title: "Blog",
    description: "Tincidunt nisi erat sodales non. Netus integer nunc mi nibh cursus vitae ut nulla labortis. Risus duis bibendum.",
    image: "/path/to/another-blog-image.jpg"
  }
];

type BlogItemProps = {
  title: string;
  description: string;
  image: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-[212px] aspect-square mb-4">
      <Image
        src="/"
        alt={title}
        layout="fill"
        objectFit="cover"
        className="bg-[#1B255E] "
      />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const BlogsAndUseCases: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs and Use Cases</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item: Item, index: number) => (
          <BlogItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BlogsAndUseCases;