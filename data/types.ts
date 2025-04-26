export type Category = 'data-structure' | 'algorithm';

export type SubCategory = 
  // Data Structures
  | 'arrays'
  | 'linked-lists'
  | 'stacks'
  | 'queues'
  | 'hash-tables'
  | 'trees'
  | 'heaps'
  | 'graphs'
  | 'tries'
  // Algorithms
  | 'sorting'
  | 'searching'
  | 'dynamic-programming'
  | 'greedy'
  | 'recursion'
  | 'bit-manipulation';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Flashcard {
  id: string;
  category: Category;
  subcategory: SubCategory;
  front: string;
  back: string;
  code?: string;
  difficulty: Difficulty;
  tags: string[];
}

export interface CategoryInfo {
  id: string;
  title: string;
  description: string;
  subcategories: {
    id: SubCategory;
    title: string;
    description: string;
  }[];
}
