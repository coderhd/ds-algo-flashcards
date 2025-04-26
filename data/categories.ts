import { CategoryInfo } from './types';

export const categories: CategoryInfo[] = [
  {
    id: 'data-structure',
    title: 'Data Structures',
    description: 'Fundamental data structures used in computer science and programming.',
    subcategories: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Contiguous memory locations that store items of the same type.'
      },
      {
        id: 'linked-lists',
        title: 'Linked Lists',
        description: 'Linear data structure where elements are stored in nodes that point to the next node.'
      },
      {
        id: 'stacks',
        title: 'Stacks',
        description: 'LIFO (Last In First Out) data structure with push and pop operations.'
      },
      {
        id: 'queues',
        title: 'Queues',
        description: 'FIFO (First In First Out) data structure with enqueue and dequeue operations.'
      },
      {
        id: 'hash-tables',
        title: 'Hash Tables',
        description: 'Data structure that maps keys to values using a hash function.'
      },
      {
        id: 'trees',
        title: 'Trees',
        description: 'Hierarchical data structure with a root node and child nodes.'
      },
      {
        id: 'heaps',
        title: 'Heaps',
        description: 'Special tree-based data structure that satisfies the heap property.'
      },
      {
        id: 'graphs',
        title: 'Graphs',
        description: 'Collection of nodes (vertices) and edges that connect pairs of nodes.'
      },
      {
        id: 'tries',
        title: 'Tries',
        description: 'Tree-like data structure used for storing a dynamic set of strings.'
      }
    ]
  },
  {
    id: 'algorithm',
    title: 'Algorithms',
    description: 'Step-by-step procedures for solving problems or performing tasks.',
    subcategories: [
      {
        id: 'sorting',
        title: 'Sorting',
        description: 'Algorithms that arrange elements in a specific order.'
      },
      {
        id: 'searching',
        title: 'Searching',
        description: 'Algorithms that find an element in a data structure.'
      },
      {
        id: 'dynamic-programming',
        title: 'Dynamic Programming',
        description: 'Method for solving complex problems by breaking them down into simpler subproblems.'
      },
      {
        id: 'greedy',
        title: 'Greedy Algorithms',
        description: 'Algorithms that make locally optimal choices at each step.'
      },
      {
        id: 'recursion',
        title: 'Recursion',
        description: 'Technique where a function calls itself to solve a problem.'
      },
      {
        id: 'bit-manipulation',
        title: 'Bit Manipulation',
        description: 'Techniques for manipulating bits or groups of bits.'
      }
    ]
  }
];
