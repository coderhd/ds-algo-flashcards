"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search as SearchIcon } from "lucide-react"
import { Flashcard as FlashcardType } from "@/data/types"
import { flashcards } from "@/data/flashcards"
import { Flashcard } from "./flashcard"

export function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<FlashcardType[]>([])
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({})
  const [hasSearched, setHasSearched] = useState(false)

  // Load mastered cards from localStorage
  useEffect(() => {
    const storedMasteredCards = localStorage.getItem("masteredCards")
    if (storedMasteredCards) {
      setMasteredCards(JSON.parse(storedMasteredCards))
    }
  }, [])

  // Reset hasSearched when search term changes
  useEffect(() => {
    if (hasSearched) {
      setHasSearched(false)
      setResults([])
    }
  }, [searchTerm])

  const handleSearch = () => {
    // Mark that a search has been performed
    setHasSearched(true)

    if (!searchTerm.trim()) {
      setResults([])
      return
    }

    const term = searchTerm.toLowerCase()
    const filtered = flashcards.filter(card =>
      card.front.toLowerCase().includes(term) ||
      card.back.toLowerCase().includes(term) ||
      card.tags.some(tag => tag.toLowerCase().includes(term)) ||
      card.subcategory.toLowerCase().includes(term)
    )

    setResults(filtered)
  }

  const handleMastered = (id: string, mastered: boolean) => {
    const updatedMasteredCards = { ...masteredCards, [id]: mastered }
    setMasteredCards(updatedMasteredCards)
    localStorage.setItem("masteredCards", JSON.stringify(updatedMasteredCards))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search input and button */}
      <div className="flex gap-2 mb-8 max-w-2xl mx-auto">
        <Input
          placeholder="Search for flashcards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch}>
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Show results if there are any */}
      {results.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {results.map((card) => (
            <Flashcard
              key={card.id}
              card={card}
              onMastered={handleMastered}
              isMastered={masteredCards[card.id] || false}
            />
          ))}
        </div>
      )}

      {/* Show "No flashcards found" message only if a search has been performed and there are no results */}
      {results.length === 0 && searchTerm && hasSearched && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No flashcards found for &ldquo;{searchTerm}&rdquo;</p>
        </div>
      )}

      {/* Show initial instructions if no search has been performed yet */}
      {!hasSearched && !results.length && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Enter a search term and click Search to find flashcards</p>
        </div>
      )}
    </div>
  )
}
