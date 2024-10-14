import { defineType, defineField } from "sanity";

export default defineType({
  name: "landingPage",
  title: "Landing Page",
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
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: "hero2",
      title: "Hero Section 2",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading ",
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
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: "ourclient",
      title: "Our Client",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "client",
              title: "client logo",
              type: "image",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "services",
      title: "Service",
      type: "object",
      fields: [
        defineField({
          name: "services",
          title: "Services",
          type: "string",
        }),
        defineField({
          name: "servicesParagraph",
          title: "Services paragraph",
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
                  name: "serviceAction",
                  title: "Service Button",
                  type: "object",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Button Text",
                      type: "string",
                    }),
                    defineField({
                      name: "link",
                      title: "Button Link",
                      type: "url",
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),

   defineField({
    name:"consultingServices",
    title:"Consulting Services",
    type:"object",
    fields:[
      defineField({
        name: "heading",
        title: "Heading",
        type: "string",
      }),
      defineField({
        name: "paragraph",
        title: "Paragraph",
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
                name: "consultingServiceAction",
                title: "Consulting Service Button",
                type: "object",
                fields: [
                  defineField({
                    name: "text",
                    title: "Button Text",
                    type: "string",
                  }),
                  defineField({
                    name: "link",
                    title: "Button Link",
                    type: "url",
                  }),
                ],
              }),
            ],
          },
        ],
      }),

    ]
   }),
    defineField({name:"blogs",title:"Blogs",type:"object",fields:[
      defineField({
        name: "blogTitle",
        title: "Blogs Title",
        type: "string",
      }),
  
      defineField({
        name: "blogsCard",
        title: "Blogs Card ",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              defineField({
                name: "heading",
                title: "Blog heading ",
                type: "string",
              }),
              defineField({
                name: "paragraph",
                title: "Blog Paragraph",
                type: "text",
              }),
              defineField({
                name: "name",
                title: "Your Name",
                type: "string",
              }),
              defineField({
                name: "date",
                title: "Blog Date",
                type: "date",
                validation: (Rule) => Rule.required(),
              }),
            ],
          },
        ],
      }),

    ]})
 
  ],
});
