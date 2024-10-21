import { unstable_noStore as noStore } from "next/cache";
import { client } from "./sanity";

export type Item = {
  _id: string;
  title: string;
  category: string;
  // Add other fields as needed
};

export async function getData(
  category: string,
  page: number = 1,
  pageSize: number = 12
) {
  noStore();

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  try {
    if (category) {
      const items = await client.fetch<Item[]>(
        `
        *[_type == "blog" && category == $category] | order(title asc) [${start}...${end}] {
        _type,

         "slug": slug.current,
    _updatedAt,
          _id,
          title,
          publishedAt,
          body,
          mainImage,
          category,
          // Add other fields you want to fetch
        }
      `,
        { category }
      );

      const totalItems = await client.fetch<number>(
        'count(*[_type == "blog" && category == $category])',
        { category }
      );

      const totalPages = Math.ceil(totalItems / pageSize);

      return { items, totalPages, totalItems };
    } else {
      const items = await client.fetch<Item[]>(
        `
        *[_type == "blog" ] | order(title asc) [${start}...${end}] {
        _type,
              "slug": slug.current,
    _updatedAt,
          _id,
          title,
          publishedAt,
          body,
          mainImage,
          category,
          // Add other fields you want to fetch
        }
      `
      );

      const totalItems = await client.fetch<number>(
        'count(*[_type == "blog" ])'
      );

      const totalPages = Math.ceil(totalItems / pageSize);

      return { items, totalPages, totalItems };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function getCategories() {
  noStore();

  try {
    const categories = await client.fetch<string[]>(`
      *[_type == "item"].category | unique
    `);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
}
