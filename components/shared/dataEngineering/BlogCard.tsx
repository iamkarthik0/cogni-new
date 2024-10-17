import Image from "next/image";
import React from "react";

const blogContent = [
  {
    img: "/blogcard.png",
    paragraph:
      "Leverage our experience to define roadmap, strategy and approach to building and sustaining the most optimal data platform. Our toolkits, accelerators, solutions, and partnerships help us architect your target platform faster, accelerating your overall cloud data migration journey.",
    heading: "Cloud engineering advisory and strategy services",
  },
  {
    img: "/blogcard.png",
    paragraph:
      "Leverage our experience to define roadmap, strategy and approach to building and sustaining the most optimal data platform. Our toolkits, accelerators, solutions, and partnerships help us architect your target platform faster, accelerating your overall cloud data migration journey.",
    heading: "Cloud engineering advisory and strategy services",
  },

  {
    img: "/blogcard.png",
    paragraph:
      "Leverage our experience to define roadmap, strategy and approach to building and sustaining the most optimal data platform. Our toolkits, accelerators, solutions, and partnerships help us architect your target platform faster, accelerating your overall cloud data migration journey.",
    heading: "Cloud engineering advisory and strategy services",
  },
];

const BlogContent = (props: any) => {
  const { img, heading, paragraph } = props;

  return (
    <>
      <div className=" flex flex-col gap-y-4 justify-center items-center ">
        <Image src={img} alt="blogcard" width={350} height={223} />
        <h3 className=" h4 space-y-3">{heading}</h3>

        <p className=" space-y-5">{paragraph}</p>
      </div>
    </>
  );
};

const BlogCard = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {blogContent.map((data, index) => (
          <>
            <BlogContent
              key={index}
              img={data.img}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
