import { defineType } from "sanity";

export const blog = defineType({
  name: "blog", // The internal name of the schema used in queries
  title: "Blog", // The display name in the Studio
  type: "document", // Specifies that it's a document type
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string", // Title of the blog post
      validation: (Rule) => Rule.required().min(10).max(80), // Validation rules
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug", // Slug field for SEO-friendly URLs
      options: {
        source: "title", // Automatically generates from title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(), // Slug is required
    },
    {
      name: "author",
      title: "Author",
      type: "string", // Reference to the author schema
    },
    {
      name: "category",
      title: "Category",
      type: "string", // Reference to the category schema
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date", // Publication date
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "text", // Rich text content for the body of the blog
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image", // Main image for the blog post
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
  orderings: [
    // Sorting options for the document
    {
      title: "Published Date, Newest",
      name: "publishDateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date, Oldest",
      name: "publishDateAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
