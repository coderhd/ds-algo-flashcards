import { notFound } from "next/navigation"
import { categories } from "@/data/categories"
import { flashcards } from "@/data/flashcards"
import { FlashcardContent } from "@/components/custom/flashcard-content"

interface FlashcardsPageProps {
  params: {
    categoryId: string
    subcategoryId: string
  }
}

export default async function FlashcardsPage({ params }: FlashcardsPageProps) {
  // Using await to properly handle the params object
  const { categoryId, subcategoryId } = await Promise.resolve(params)

  const category = categories.find((c) => c.id === categoryId)
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId)

  const cards = flashcards.filter(
    (card) => card.category === categoryId && card.subcategory === subcategoryId
  )

  if (!category || !subcategory || cards.length === 0) {
    notFound()
  }

  return (
    <FlashcardContent
      categoryId={categoryId}
      category={category}
      subcategory={subcategory}
      cards={cards}
    />
  )
}
