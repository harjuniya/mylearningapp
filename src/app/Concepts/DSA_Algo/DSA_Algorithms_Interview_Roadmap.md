# DSA & Algorithms Interview Roadmap
## For ASP.NET Core and Angular Developer Interviews

**DSA language:** C#  
**Goal:** Learn Data Structures and Algorithms step by step, solve interview questions, and retain what you learn.

---

## 1. How to Learn Each Topic

Use this cycle for every concept:

1. **Understand** the concept in simple words.
2. **Trace** a small example by hand.
3. **Predict** the output before running the code.
4. **Implement** it in C# without copying.
5. **Explain** the logic and time/space complexity aloud.
6. **Recall** it without notes.
7. **Revise** after 1, 3, 7, and 14 days.

### Daily study routine (about 2 hours)

| Time | Activity |
|---|---|
| 20 minutes | Revise previous topics |
| 30 minutes | Learn one concept |
| 50 minutes | Solve 1–3 problems |
| 20 minutes | Explain the solution and record mistakes |

Focus on understanding and consistency, not solving many questions quickly.

---

## 2. Foundations

### Learn first

- [ ] What is an algorithm?
- [ ] What is a data structure?
- [ ] Difference between data structures and algorithms
- [ ] Input, output, conditions, and loops
- [ ] Time complexity
- [ ] Space complexity
- [ ] Big O notation: `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`

### C# skills to practise

- [ ] Variables and data types
- [ ] `if` / `else`
- [ ] `for` and `while` loops
- [ ] Arrays and strings
- [ ] Methods and return values
- [ ] `List<T>`
- [ ] `Dictionary<TKey, TValue>`
- [ ] `HashSet<T>`

---

## 3. Data Structures Learning Path

Study these in order.

### A. Arrays and Strings

- [ ] Indexing and traversal
- [ ] Find minimum and maximum
- [ ] Reverse an array or string
- [ ] Find duplicates
- [ ] Frequency counting
- [ ] Remove or move elements
- [ ] Rotate an array
- [ ] Check whether a string is a palindrome

### B. Hashing

- [ ] `Dictionary<TKey, TValue>`
- [ ] `HashSet<T>`
- [ ] Count item frequencies
- [ ] Detect duplicates efficiently
- [ ] Two Sum problem

### C. Linked Lists

- [ ] Singly linked list
- [ ] Insert and delete nodes
- [ ] Reverse a linked list
- [ ] Find the middle node
- [ ] Detect a cycle

### D. Stack and Queue

- [ ] Stack: last in, first out (LIFO)
- [ ] Queue: first in, first out (FIFO)
- [ ] Balanced parentheses
- [ ] Next greater element
- [ ] Queue-based processing

### E. Trees and Binary Search Trees

- [ ] Tree terminology
- [ ] Preorder, inorder, and postorder traversal
- [ ] Breadth-first traversal
- [ ] Search in a binary search tree
- [ ] Find tree height and depth
- [ ] Validate a binary search tree

### F. Heaps and Priority Queues

- [ ] Min-heap and max-heap concepts
- [ ] C# `PriorityQueue<TElement, TPriority>`
- [ ] Find the Kth largest element
- [ ] Top K frequent elements

### G. Graphs

- [ ] Vertices and edges
- [ ] Adjacency list
- [ ] Breadth-first search (BFS)
- [ ] Depth-first search (DFS)
- [ ] Detect cycles
- [ ] Topological sorting
- [ ] Shortest paths and Dijkstra's algorithm

### H. Other Structures

- [ ] Trie (prefix tree)
- [ ] Union-Find / Disjoint Set Union
- [ ] When these structures are useful

---

## 4. Algorithms Learning Path

Data structures organise data. Algorithms describe the steps used to solve a problem.

### A. Searching

- [ ] Linear search
- [ ] Binary search
- [ ] Binary search on the answer

### B. Sorting

Learn the idea, implementation, and complexity of each:

- [ ] Bubble sort
- [ ] Selection sort
- [ ] Insertion sort
- [ ] Merge sort
- [ ] Quick sort
- [ ] Know when built-in sorting is appropriate

### C. Array and String Problem-Solving Patterns

- [ ] Two pointers
- [ ] Sliding window
- [ ] Prefix sums
- [ ] Frequency counting
- [ ] Hashing
- [ ] Fast and slow pointers
- [ ] Sorting followed by searching

### D. Recursion and Backtracking

- [ ] Base case and recursive case
- [ ] Call stack
- [ ] Factorial and simple recursion
- [ ] Generate subsets
- [ ] Generate permutations
- [ ] Combination problems
- [ ] Backtracking with constraints

### E. Greedy Algorithms

- [ ] What makes a greedy choice?
- [ ] Interval scheduling
- [ ] Activity selection
- [ ] When greedy does not work

### F. Dynamic Programming (DP)

- [ ] Identify repeated subproblems
- [ ] Memoization (top-down)
- [ ] Tabulation (bottom-up)
- [ ] Fibonacci as a starter problem
- [ ] Climbing stairs
- [ ] Coin change
- [ ] Longest common subsequence
- [ ] Knapsack fundamentals

### G. Graph Algorithms

- [ ] BFS and DFS applications
- [ ] Dijkstra's shortest-path algorithm
- [ ] Topological sort
- [ ] Minimum spanning tree basics
- [ ] Union-Find applications

---

## 5. Suggested 12-Week Plan

| Week | Main topics | Practice goal |
|---|---|---|
| 1 | Algorithm basics, loops, Big O, arrays | Trace loops; find min/max |
| 2 | Strings and array traversal | Reverse strings; palindrome |
| 3 | Dictionary, HashSet, hashing | Frequency counts; Two Sum |
| 4 | Two pointers and sliding window | Pair and subarray problems |
| 5 | Prefix sums and binary search | Range sums; sorted-array search |
| 6 | Sorting and linked lists | Compare sorting; reverse a list |
| 7 | Stacks and queues | Parentheses; queue processing |
| 8 | Recursion and backtracking | Subsets; simple combinations |
| 9 | Trees and binary search trees | Traversals; search; height |
| 10 | Heaps and graphs | Top K; BFS; DFS |
| 11 | Greedy and dynamic programming | Starter problems for each |
| 12 | Revision and mock interviews | Explain and solve mixed problems |

**Important:** This is a flexible plan. Spend extra time on a topic when you cannot explain or implement it independently.

---

## 6. A Small C# Algorithm Example

Problem: Find the largest number in an array.

```csharp
int[] numbers = { 10, 30, 20 };

int largest = numbers[0];

for (int i = 1; i < numbers.Length; i++)
{
    if (numbers[i] > largest)
    {
        largest = numbers[i];
    }
}

Console.WriteLine(largest); // 30
```

### Understand it

1. Start by assuming the first number (`10`) is the largest.
2. Compare `30` with `10`; update the largest to `30`.
3. Compare `20` with `30`; keep `30`.
4. Print `30`.

- **Time complexity:** `O(n)` — in the worst case, inspect each element.
- **Extra space complexity:** `O(1)` — use a fixed number of extra variables.

---

## 7. Interview Problem-Solving Checklist

Before writing code:

- [ ] Restate the problem in your own words.
- [ ] Confirm the inputs and expected output.
- [ ] Work through a tiny example.
- [ ] Consider empty, single-item, duplicate, and boundary cases.
- [ ] Explain a straightforward solution first.
- [ ] Improve it if needed.
- [ ] Write readable C# code.
- [ ] Test the code manually.
- [ ] Explain time and space complexity.

After solving:

- [ ] Can I solve it again without looking?
- [ ] Can I explain why the algorithm works?
- [ ] Do I know its time and space complexity?
- [ ] Have I recorded the mistake or key lesson?

---

## 8. Recommended Practice Order

Start with easy problems and move forward only when you understand the current pattern.

1. Find the maximum in an array
2. Find the minimum in an array
3. Reverse an array
4. Check a palindrome
5. Count frequencies
6. Find duplicates
7. Two Sum
8. Binary search
9. Two pointers
10. Sliding window
11. Reverse a linked list
12. Valid parentheses
13. Binary tree traversal
14. BFS and DFS
15. Basic greedy problems
16. Basic dynamic programming problems

---

## 9. Progress Tracker

### Foundations
- [ ] I can explain what an algorithm is.
- [ ] I can explain Big O in simple words.
- [ ] I can estimate the complexity of a loop.
- [ ] I can trace arrays and loops in C#.

### Core patterns
- [ ] I can use arrays and strings confidently.
- [ ] I can use `Dictionary` and `HashSet`.
- [ ] I can recognise two-pointer problems.
- [ ] I can recognise sliding-window problems.
- [ ] I can implement binary search.

### Advanced structures and algorithms
- [ ] I can implement basic linked-list operations.
- [ ] I can use stacks and queues.
- [ ] I understand tree traversal.
- [ ] I understand BFS and DFS.
- [ ] I can explain recursion and backtracking.
- [ ] I understand the basics of greedy and dynamic programming.

### Interview readiness
- [ ] I can solve an easy problem without copying.
- [ ] I can explain my approach aloud.
- [ ] I can analyse time and space complexity.
- [ ] I can test edge cases.
- [ ] I have revised previously solved problems.

---

## 10. The Rule to Remember

**Understand → Trace → Code → Explain → Recall → Revise.**

Use **C#** for DSA practice because it aligns with ASP.NET Core interviews. Continue using **TypeScript** for Angular application development. If a job description or interview explicitly requires another language, follow that requirement.
