# DSA Flashcards

A modern, mobile-friendly web application built with Next.js and Shadcn UI for studying data structures and algorithms on the go. Perfect for technical interview preparation.

## Overview

DSA Flashcards is a responsive web application that helps you prepare for technical coding interviews by providing quick access to essential data structures and algorithms concepts. Built with Next.js and Shadcn UI, it offers a sleek, consistent user experience across all devices with the power of React and the elegance of a well-designed component system.

## Features

- **Mobile-First Design**: Optimized for mobile viewing and interaction
- **Offline Access**: Study even without an internet connection (with Next.js PWA capabilities)
- **Categorized Flashcards**: Cards organized by data structure and algorithm types
- **Interactive Learning**: Flip cards to reveal explanations, code examples, and time/space complexity
- **Progress Tracking**: Mark cards as mastered to focus on challenging concepts
- **Search Functionality**: Quickly find specific topics
- **Custom Cards**: Add your own flashcards for personalized learning
- **Dark/Light Mode**: Easy on the eyes in any lighting condition
- **Code Syntax Highlighting**: Clear visualization of code examples

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework with SSR/SSG capabilities)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Beautifully designed components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **State Management**: React Context API or [Zustand](https://github.com/pmndrs/zustand)
- **Storage**: LocalStorage/IndexedDB with optional backend integration
- **Deployment**: Vercel or Netlify

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dsa-flashcards.git
   ```

2. Navigate to the project directory:
   ```
   cd dsa-flashcards
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deployment

Deploy to Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Your app will be automatically deployed

## Flashcard Categories

### Data Structures
- Arrays
- Linked Lists
- Stacks
- Queues
- Hash Tables
- Trees (Binary, BST, AVL, etc.)
- Heaps
- Graphs
- Tries

### Algorithms
- Sorting (Quicksort, Mergesort, etc.)
- Searching (Binary Search, DFS, BFS)
- Dynamic Programming
- Greedy Algorithms
- Recursion
- Bit Manipulation

## Project Structure

```
dsa-flashcards/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── categories/          # Category pages
│   └── flashcards/          # Flashcard pages
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   └── custom/              # Custom app components
├── lib/                     # Utility functions
├── data/                    # Flashcard data
├── public/                  # Static assets
├── styles/                  # Global styles
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## Development

### Adding Shadcn UI Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
# Add other components as needed
```

### Adding New Flashcards

Edit the `data/flashcards.ts` file to add new flashcards. Each card follows this structure:

```typescript
{
  id: "unique-id",
  category: "data-structure", // or "algorithm"
  subcategory: "arrays",
  front: "What is the time complexity of array access?",
  back: "O(1) - Constant time complexity",
  code: "// Example code if applicable\narray[index]",
  difficulty: "easy", // easy, medium, hard
  tags: ["array", "time-complexity"]
}
```

### Customization

- Modify `tailwind.config.js` to customize theme colors and variables
- Update `components/ui` for Shadcn UI component customizations
- Use the Shadcn UI theming system for consistent styling

## Future Enhancements

- User authentication with Next Auth
- Spaced repetition learning algorithm
- Timed quiz mode
- Code execution environment
- Backend API with database storage (Prisma + PostgreSQL)
- Progress synchronization across devices
- Collaborative flashcard sharing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach
- Inspired by the need for quick, accessible interview preparation tools

---

## Quick Start for Users

1. Visit the deployed application URL
2. Add to home screen for app-like experience (PWA functionality)
3. Browse categories or search for specific topics
4. Tap cards to flip between question and answer
5. Toggle between light and dark mode based on your preference
6. Mark cards as "mastered" to track your progress

Happy studying and good luck with your interviews!
