import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { CategoryContent } from "@/components/custom/category-content";

// In Next.js 15, params is a Promise that resolves to an object
interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Using await to properly handle the params object
  const { categoryId } = await Promise.resolve(params);
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return <CategoryContent categoryId={categoryId} category={category} />;
}
