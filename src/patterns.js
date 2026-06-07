// Coding error patterns (5x5)
const ERROR_PATTERNS = [
  {
    name: "Null Pointer",
    pattern: [
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
  },
  {
    name: "Memory Leak",
    pattern: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    name: "Syntax Error",
    pattern: [
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
  },
  {
    name: "Race Condition",
    pattern: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
  },
  {
    name: "Stack Overflow",
    pattern: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
];