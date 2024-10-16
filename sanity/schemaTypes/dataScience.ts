import { defineType, defineField } from "sanity";

export default defineType({
  name: "dataScience",
  title: "DataScience Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "subheading",
          title: "Subheading",
          type: "string",
        }),
        defineField({
          name: "paragraph",
          title: "Paragraph",
          type: "text",
        }),

        defineField({
          name: "image",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "servicesImage",
          title: "Service Image",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Image ",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "services",
      title: "Service",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Services Title",
          type: "string",
        }),

        defineField({
          name: "ServicesCard",
          title: "Services Card",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "heading",
                  title: "Service Card Heading",
                  type: "string",
                }),
                defineField({
                  name: "paragraph",
                  title: "Service Card Paragraph",
                  type: "text",
                }),
                defineField({
                  name: "image",
                  title: "Image ",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "blogs",
      title: "Blogs Title",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "blog name",
          type: "string",
        }),

        defineField({
          name: "card",
          title: "Card ",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "heading",
                  title: "Consulting heading ",
                  type: "string",
                }),
                defineField({
                  name: "paragraph",
                  title: "Consulting Service Paragraph",
                  type: "text",
                }),
                defineField({
                  name: "image",
                  title: "Image ",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
