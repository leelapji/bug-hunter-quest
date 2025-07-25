export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'syntax' | 'logic' | 'optimization' | 'algorithm';
  difficulty: 'easy' | 'medium' | 'hard';
  codeWithBugs: string;
  correctCode: string;
  hints: string[];
  explanation: string;
  points: number;
  lineNumbers?: number[];
}

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Missing Semicolon",
    description: "Find and fix the syntax error in this simple variable declaration.",
    type: "syntax",
    difficulty: "easy",
    codeWithBugs: `let message = "Hello World"
console.log(message);`,
    correctCode: `let message = "Hello World";
console.log(message);`,
    hints: [
      "Look for missing punctuation",
      "JavaScript statements usually end with a semicolon"
    ],
    explanation: "JavaScript statements should end with a semicolon. Without it, the code may still work due to automatic semicolon insertion, but it's considered bad practice.",
    points: 50,
    lineNumbers: [1]
  },
  {
    id: "2",
    title: "Infinite Loop Bug",
    description: "This loop will run forever! Fix the condition to make it work properly.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `let count = 0;
while (count < 10) {
  console.log("Count: " + count);
  // Bug: missing increment
}`,
    correctCode: `let count = 0;
while (count < 10) {
  console.log("Count: " + count);
  count++; // Fixed: added increment
}`,
    hints: [
      "The loop condition never changes",
      "What should happen to 'count' in each iteration?"
    ],
    explanation: "The loop variable 'count' was never incremented, causing an infinite loop. Adding 'count++' ensures the loop will eventually terminate.",
    points: 75,
    lineNumbers: [2, 3, 4]
  },
  {
    id: "3",
    title: "Array Index Error",
    description: "This function tries to access an array element that doesn't exist.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function getLastElement(arr) {
  return arr[arr.length]; // Bug: off-by-one error
}

let numbers = [1, 2, 3, 4, 5];
console.log(getLastElement(numbers));`,
    correctCode: `function getLastElement(arr) {
  return arr[arr.length - 1]; // Fixed: subtract 1
}

let numbers = [1, 2, 3, 4, 5];
console.log(getLastElement(numbers));`,
    hints: [
      "Array indices start at 0",
      "If an array has 5 elements, what's the index of the last element?"
    ],
    explanation: "Arrays are zero-indexed, so an array with length n has indices from 0 to n-1. To get the last element, use arr[arr.length - 1].",
    points: 100,
    lineNumbers: [2]
  },
  {
    id: "4",
    title: "Bubble Sort Optimization",
    description: "This bubble sort implementation works but is inefficient. Optimize it!",
    type: "optimization",
    difficulty: "hard",
    codeWithBugs: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
    correctCode: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // Early termination
  }
  return arr;
}`,
    hints: [
      "After each pass, one element is in its correct position",
      "Can you detect when the array is already sorted?",
      "Reduce unnecessary comparisons"
    ],
    explanation: "The optimized version reduces comparisons by excluding already-sorted elements (arr.length - 1 - i) and adds early termination when no swaps are made.",
    points: 150,
    lineNumbers: [3, 9]
  },
  {
    id: "5",
    title: "Variable Scope Issue",
    description: "This function has a variable scope problem that causes unexpected behavior.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function processNumbers() {
  let results = [];
  
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      results.push(i * 2);
      console.log("Added:", i * 2);
    }, 100);
  }
  
  return results;
}`,
    correctCode: `function processNumbers() {
  let results = [];
  
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      results.push(i * 2);
      console.log("Added:", i * 2);
    }, 100);
  }
  
  return results;
}`,
    hints: [
      "Pay attention to variable declaration keywords",
      "What's the difference between 'var' and 'let'?",
      "Think about closure and scope"
    ],
    explanation: "Using 'var' creates function scope, so all setTimeout callbacks reference the same 'i' variable. 'let' creates block scope, giving each iteration its own 'i'.",
    points: 125,
    lineNumbers: [4]
  }
];

export const getNextChallenge = (completedChallenges: string[]): Challenge | null => {
  return challenges.find(challenge => !completedChallenges.includes(challenge.id)) || null;
};

export const calculateLevel = (score: number): number => {
  return Math.floor(score / 200) + 1;
};