"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Flashcard } from "@/components/custom/flashcard"
import { Flashcard as FlashcardType, CategoryInfo } from "@/data/types"

export interface FlashcardContentProps {
  categoryId: string
  category: CategoryInfo
  subcategory: CategoryInfo["subcategories"][0]
  cards: FlashcardType[]
}

export function FlashcardContent({
  categoryId,
  category,
  subcategory,
  cards
}: Readonly<FlashcardContentProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Load mastered cards from localStorage
    const storedMasteredCards = localStorage.getItem("masteredCards")
    if (storedMasteredCards) {
      setMasteredCards(JSON.parse(storedMasteredCards))
    }
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const handleMastered = (id: string, mastered: boolean) => {
    const updatedMasteredCards = { ...masteredCards, [id]: mastered }
    setMasteredCards(updatedMasteredCards)
    localStorage.setItem("masteredCards", JSON.stringify(updatedMasteredCards))
  }

  return (
    <div className="container max-w-5xl mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{subcategory.title}</h1>
          <p className="text-muted-foreground">{subcategory.description}</p>
        </div>
        <Button asChild variant="outline" className="mt-4 sm:mt-0">
          <Link href={`/categories/${categoryId}`}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to {category.title}
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-md mb-8 mx-auto">
          <Flashcard
            card={cards[currentIndex]}
            onMastered={handleMastered}
            isMastered={masteredCards[cards[currentIndex].id] || false}
          />
        </div>

        <div className="flex items-center gap-4 justify-center">
          <Button onClick={handlePrevious} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {cards.length}
          </span>
          <Button onClick={handleNext} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
