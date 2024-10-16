import { defineType, defineField } from "sanity";

export default defineType({
  name: "GenAiService",
  title: "GenAiService Page",
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
      ],
    }),

    defineField({
      name: "aiServices",
      title: "AI Services",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Services Title",
          type: "string",
        }),
        defineField({
          name: "paragraph",
          title: "paragraph",
          type: "text",
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
                  name: "order",
                  title: "Order",
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
  ],
});
