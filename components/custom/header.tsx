"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl mx-auto flex h-14 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">DSA Flashcards</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/categories/data-structure"
              className="transition-colors hover:text-foreground/80"
            >
              Data Structures
            </Link>
            <Link
              href="/categories/algorithm"
              className="transition-colors hover:text-foreground/80"
            >
              Algorithms
            </Link>
            <Link
              href="/search"
              className="transition-colors hover:text-foreground/80"
            >
              Search
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <ThemeToggle />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>DSA Flashcards</SheetTitle>
                <SheetDescription>
                  Study data structures and algorithms on the go
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <div className="flex flex-col space-y-4">
                <Link
                  href="/categories/data-structure"
                  className="text-sm font-medium"
                >
                  Data Structures
                </Link>
                <Link
                  href="/categories/algorithm"
                  className="text-sm font-medium"
                >
                  Algorithms
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-medium"
                >
                  Search
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
