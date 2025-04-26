import { CategoryCard } from "@/components/custom/category-card";
import { categories } from "@/data/categories";
import { flashcards } from "@/data/flashcards";

export default function Home() {
  // Count flashcards for each category
  const categoryCounts = categories.map(category => {
    const count = flashcards.filter(card => card.category === category.id).length;
    return { ...category, count };
  });

  return (
    <div className="container max-w-5xl mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">DSA Flashcards</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A modern, mobile-friendly web application for studying data structures and algorithms on the go.
          Perfect for technical interview preparation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12 max-w-4xl mx-auto">
        {categoryCounts.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
            count={category.count}
          />
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Mobile-First Design</h3>
              <p className="text-sm text-muted-foreground">Optimized for mobile viewing and interaction</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">Flip cards to reveal explanations and code examples</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Mark cards as mastered to focus on challenging concepts</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Search Functionality</h3>
              <p className="text-sm text-muted-foreground">Quickly find specific topics</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Dark/Light Mode</h3>
              <p className="text-sm text-muted-foreground">Easy on the eyes in any lighting condition</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Code Syntax Highlighting</h3>
              <p className="text-sm text-muted-foreground">Clear visualization of code examples</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
