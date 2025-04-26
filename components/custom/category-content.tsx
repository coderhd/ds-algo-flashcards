"use client"

import { SubcategoryCard } from "@/components/custom/subcategory-card"
import { flashcards } from "@/data/flashcards"
import type { CategoryInfo } from "@/data/types"

export interface CategoryContentProps {
  categoryId: string
  category: CategoryInfo
}

export function CategoryContent({ categoryId, category }: Readonly<CategoryContentProps>) {
  // Count flashcards for each subcategory
  const subcategoryCounts = category.subcategories.map((subcategory) => {
    const count = flashcards.filter(
      (card) =>
        card.category === categoryId &&
        card.subcategory === subcategory.id
    ).length
    return { ...subcategory, count }
  })

  return (
    <div className="container max-w-5xl mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{category.title}</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {subcategoryCounts.map((subcategory) => (
          <SubcategoryCard
            key={subcategory.id}
            categoryId={categoryId}
            id={subcategory.id}
            title={subcategory.title}
            description={subcategory.description}
            count={subcategory.count}
          />
        ))}
      </div>
    </div>
  )
}
