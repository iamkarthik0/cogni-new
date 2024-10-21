import { client } from "@/lib/sanity";
import { MetadataRoute } from "next";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "http://localhost:3000";

  // Sanity se saare documents fetch karo jinme slug defined hai
  const query = groq`*[defined(slug.current)] {
    _type,
    "slug": slug.current,
    _updatedAt
  }`;

  const documents = await client.fetch(query);
  console.log(documents);
  // Har document ke liye sitemap entry banao
  const sitemapEntries = documents.map((doc: any) => {
    let path = "";
    switch (doc._type) {
      case "post":
        path = `/blogs/${doc.slug}`;
        break;
      case "case-studies":
        path = `/case-studies/${doc.slug}`;
        break;
      // Aur bhi document types ke liye cases add kar sakte hain
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(doc._updatedAt),
    };
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://cogninest.ai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cogninest.ai/healthcare",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://cogninest.ai/pharma",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/cpg-industry",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/media",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/retail",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/ai-manufacturing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/ai-finance",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/gen-ai-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/ml-dl-service",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/data-engineering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/predictive-modeling",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/gpt-integration",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/document-ai-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/cloud-consultant",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/computer-vision",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/deep-learning",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://cogninest.ai/next-gen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/idp",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://cogninest.ai/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...sitemapEntries];
}
