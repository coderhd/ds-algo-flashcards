import { Search } from "@/components/custom/search"

export default function SearchPage() {
  return (
    <div className="container max-w-5xl mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Search Flashcards</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Search for flashcards by keyword, topic, or tag
        </p>
      </div>

      <Search />
    </div>
  )
}
