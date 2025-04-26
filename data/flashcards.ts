import { Flashcard } from './types';

export const flashcards: Flashcard[] = [
  // Arrays
  {
    id: 'array-1',
    category: 'data-structure',
    subcategory: 'arrays',
    front: 'What is the time complexity of accessing an element in an array?',
    back: 'O(1) - Constant time complexity. Arrays provide direct access to elements using indices.',
    difficulty: 'easy',
    tags: ['array', 'time-complexity']
  },
  {
    id: 'array-2',
    category: 'data-structure',
    subcategory: 'arrays',
    front: 'What is the time complexity of inserting an element at the end of an array?',
    back: 'O(1) - Constant time complexity for dynamic arrays with available capacity. If resizing is needed, it becomes O(n).',
    difficulty: 'easy',
    tags: ['array', 'time-complexity', 'insertion']
  },
  {
    id: 'array-3',
    category: 'data-structure',
    subcategory: 'arrays',
    front: 'What is the time complexity of inserting an element at the beginning of an array?',
    back: 'O(n) - Linear time complexity. All existing elements need to be shifted one position to the right.',
    code: '// JavaScript example\nfunction insertAtBeginning(arr, element) {\n  for (let i = arr.length; i > 0; i--) {\n    arr[i] = arr[i-1];\n  }\n  arr[0] = element;\n  return arr;\n}',
    difficulty: 'medium',
    tags: ['array', 'time-complexity', 'insertion']
  },

  // Linked Lists
  {
    id: 'linked-list-1',
    category: 'data-structure',
    subcategory: 'linked-lists',
    front: 'What is a singly linked list?',
    back: 'A singly linked list is a linear data structure where each element (node) contains data and a reference to the next node in the sequence. The last node points to null.',
    code: 'class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}',
    difficulty: 'easy',
    tags: ['linked-list', 'singly-linked-list']
  },
  {
    id: 'linked-list-2',
    category: 'data-structure',
    subcategory: 'linked-lists',
    front: 'What is the time complexity of inserting at the beginning of a linked list?',
    back: 'O(1) - Constant time complexity. We only need to update the head pointer and the next pointer of the new node.',
    code: 'function insertAtBeginning(head, data) {\n  const newNode = new Node(data);\n  newNode.next = head;\n  return newNode; // New head\n}',
    difficulty: 'easy',
    tags: ['linked-list', 'time-complexity', 'insertion']
  },

  // Stacks
  {
    id: 'stack-1',
    category: 'data-structure',
    subcategory: 'stacks',
    front: 'What is a stack and what are its primary operations?',
    back: 'A stack is a LIFO (Last In First Out) data structure. Its primary operations are push (add an element to the top) and pop (remove the top element).',
    difficulty: 'easy',
    tags: ['stack', 'lifo']
  },
  {
    id: 'stack-2',
    category: 'data-structure',
    subcategory: 'stacks',
    front: 'How would you implement a stack using an array?',
    back: 'You can implement a stack using an array by using push() to add elements and pop() to remove elements. You can also track the top index.',
    code: 'class Stack {\n  constructor() {\n    this.items = [];\n  }\n  \n  push(element) {\n    this.items.push(element);\n  }\n  \n  pop() {\n    if (this.isEmpty()) return "Underflow";\n    return this.items.pop();\n  }\n  \n  peek() {\n    return this.items[this.items.length - 1];\n  }\n  \n  isEmpty() {\n    return this.items.length === 0;\n  }\n}',
    difficulty: 'medium',
    tags: ['stack', 'implementation', 'array']
  },

  // Sorting Algorithms
  {
    id: 'sorting-1',
    category: 'algorithm',
    subcategory: 'sorting',
    front: 'What is the time complexity of QuickSort?',
    back: 'Average case: O(n log n)\nWorst case: O(n²) when the pivot selection is poor (e.g., already sorted array with first/last element as pivot)\nBest case: O(n log n)',
    difficulty: 'medium',
    tags: ['sorting', 'quicksort', 'time-complexity']
  },
  {
    id: 'sorting-2',
    category: 'algorithm',
    subcategory: 'sorting',
    front: 'How does Merge Sort work?',
    back: 'Merge Sort is a divide and conquer algorithm that:\n1. Divides the input array into two halves\n2. Recursively sorts the two halves\n3. Merges the sorted halves to produce the final sorted array',
    code: 'function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  \n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  let result = [];\n  let i = 0, j = 0;\n  \n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) {\n      result.push(left[i]);\n      i++;\n    } else {\n      result.push(right[j]);\n      j++;\n    }\n  }\n  \n  return result.concat(left.slice(i)).concat(right.slice(j));\n}',
    difficulty: 'medium',
    tags: ['sorting', 'merge-sort', 'divide-and-conquer']
  },

  // Searching Algorithms
  {
    id: 'searching-1',
    category: 'algorithm',
    subcategory: 'searching',
    front: 'What is Binary Search and what is its time complexity?',
    back: 'Binary Search is an efficient algorithm for finding an element in a sorted array. It works by repeatedly dividing the search interval in half.\n\nTime Complexity: O(log n)',
    code: 'function binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  \n  return -1; // Not found\n}',
    difficulty: 'medium',
    tags: ['searching', 'binary-search', 'time-complexity']
  },

  // Dynamic Programming
  {
    id: 'dp-1',
    category: 'algorithm',
    subcategory: 'dynamic-programming',
    front: 'What is Dynamic Programming?',
    back: 'Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems overlap and have optimal substructure property.',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'optimization']
  },
  {
    id: 'dp-2',
    category: 'algorithm',
    subcategory: 'dynamic-programming',
    front: 'Explain the Fibonacci sequence implementation using Dynamic Programming.',
    back: 'The Fibonacci sequence can be efficiently computed using Dynamic Programming to avoid redundant calculations:\n\n1. Create an array to store Fibonacci numbers\n2. Initialize the first two numbers\n3. Build up the sequence by adding the two previous numbers\n\nThis reduces time complexity from O(2^n) (recursive) to O(n) (DP).',
    code: 'function fibonacci(n) {\n  if (n <= 1) return n;\n  \n  const fib = [0, 1];\n  for (let i = 2; i <= n; i++) {\n    fib[i] = fib[i-1] + fib[i-2];\n  }\n  \n  return fib[n];\n}',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'fibonacci', 'memoization']
  }
];
