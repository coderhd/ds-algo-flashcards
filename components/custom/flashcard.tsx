"use client"

import { useState } from "react"
import { Flashcard as FlashcardType } from "@/data/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface FlashcardProps {
  card: FlashcardType
  onMastered?: (id: string, mastered: boolean) => void
  isMastered?: boolean
}

export function Flashcard({ card, onMastered, isMastered = false }: Readonly<FlashcardProps>) {
  const [flipped, setFlipped] = useState(false)
  const [mastered, setMastered] = useState(isMastered)

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  const handleMastered = () => {
    const newMastered = !mastered
    setMastered(newMastered)
    if (onMastered) {
      onMastered(card.id, newMastered)
    }
  }

  return (
    <Card
      className={cn(
        "w-full max-w-md mx-auto h-[400px] perspective-1000 cursor-pointer transition-all duration-500",
        flipped && "rotate-y-180"
      )}
      onClick={handleFlip}
    >
      <div className="relative w-full h-full preserve-3d">
        <CardContent className={cn(
          "absolute w-full h-full backface-hidden p-6 flex flex-col",
          !flipped ? "visible" : "invisible rotate-y-180"
        )}>
          <div className="flex justify-between items-start mb-4">
            <div className="px-2 py-1 text-xs rounded-md bg-muted">
              {card.subcategory}
            </div>
            <div className={cn(
              "px-2 py-1 text-xs rounded-md",
              card.difficulty === "easy" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                card.difficulty === "medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            )}>
              {card.difficulty}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center text-center">
            <h3 className="text-xl font-semibold">{card.front}</h3>
          </div>
          <div className="text-xs text-muted-foreground mt-4">
            Click to flip
          </div>
        </CardContent>

        <CardContent className={cn(
          "absolute w-full h-full backface-hidden p-6 flex flex-col rotate-y-180",
          flipped ? "visible" : "invisible"
        )}>
          <div className="flex-1 overflow-auto">
            <p className="mb-4">{card.back}</p>
            {card.code && (
              <pre className="p-4 bg-muted rounded-md overflow-x-auto text-sm">
                <code>{card.code}</code>
              </pre>
            )}
          </div>
          <div className="text-xs text-muted-foreground mt-4">
            Click to flip back
          </div>
        </CardContent>
      </div>

      <CardFooter className="absolute bottom-0 w-full p-4 flex justify-between items-center z-10" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-1">
          {card.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Toggle
          pressed={mastered}
          onPressedChange={handleMastered}
          aria-label="Toggle mastered"
          size="sm"
        >
          <Star className={cn(
            "h-4 w-4",
            mastered ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          )} />
        </Toggle>
      </CardFooter>
    </Card>
  )
}
