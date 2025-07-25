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
  // EASY LEVEL - Syntax and Basic Logic (Level 1)
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
    title: "Unclosed String",
    description: "This string literal is missing its closing quote.",
    type: "syntax",
    difficulty: "easy",
    codeWithBugs: `let greeting = "Hello, world!;
console.log(greeting);`,
    correctCode: `let greeting = "Hello, world!";
console.log(greeting);`,
    hints: [
      "Check the string quotation marks",
      "Strings need both opening and closing quotes"
    ],
    explanation: "String literals must be properly closed with matching quotation marks. Missing quotes cause syntax errors.",
    points: 50,
    lineNumbers: [1]
  },
  {
    id: "3",
    title: "Wrong Variable Declaration",
    description: "Fix the incorrect way of declaring a variable.",
    type: "syntax",
    difficulty: "easy",
    codeWithBugs: `variable name = "John";
console.log(name);`,
    correctCode: `let name = "John";
console.log(name);`,
    hints: [
      "Use proper variable declaration keywords",
      "JavaScript has let, const, and var keywords"
    ],
    explanation: "Variables must be declared using keywords like 'let', 'const', or 'var'. 'variable' is not a valid declaration keyword.",
    points: 50,
    lineNumbers: [1]
  },
  {
    id: "4",
    title: "Missing Parentheses",
    description: "This function call is missing something important.",
    type: "syntax",
    difficulty: "easy",
    codeWithBugs: `function sayHello() {
  return "Hello!";
}

console.log(sayHello;`,
    correctCode: `function sayHello() {
  return "Hello!";
}

console.log(sayHello());`,
    hints: [
      "Functions need to be called with parentheses",
      "Look at the console.log line"
    ],
    explanation: "Function calls require parentheses, even if there are no arguments. Without them, you're referencing the function, not calling it.",
    points: 50,
    lineNumbers: [5]
  },
  {
    id: "5",
    title: "Undefined Variable",
    description: "This code tries to use a variable that doesn't exist.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `let firstName = "Alice";
let lastName = "Smith";
console.log(fullName);`,
    correctCode: `let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName);`,
    hints: [
      "The variable 'fullName' is never declared",
      "You need to create the fullName variable"
    ],
    explanation: "Variables must be declared and assigned before they can be used. 'fullName' was referenced but never defined.",
    points: 75,
    lineNumbers: [3]
  },
  {
    id: "6",
    title: "Wrong Comparison Operator",
    description: "This condition uses assignment instead of comparison.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `let age = 18;
if (age = 18) {
  console.log("You are 18 years old");
}`,
    correctCode: `let age = 18;
if (age === 18) {
  console.log("You are 18 years old");
}`,
    hints: [
      "Look at the if condition carefully",
      "Are you comparing or assigning?"
    ],
    explanation: "Use '===' for comparison, not '=' which is for assignment. Single '=' assigns a value instead of comparing.",
    points: 75,
    lineNumbers: [2]
  },
  {
    id: "7",
    title: "Missing Return Statement",
    description: "This function should return a value but doesn't.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `function addNumbers(a, b) {
  let sum = a + b;
}

let result = addNumbers(5, 3);
console.log(result);`,
    correctCode: `function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}

let result = addNumbers(5, 3);
console.log(result);`,
    hints: [
      "The function calculates sum but doesn't give it back",
      "Functions need 'return' to send values back"
    ],
    explanation: "Functions must use 'return' to send computed values back to the caller. Without it, the function returns 'undefined'.",
    points: 75,
    lineNumbers: [3]
  },
  {
    id: "8",
    title: "Array Index Bounds",
    description: "This code tries to access an array element that doesn't exist.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `let colors = ["red", "green", "blue"];
console.log(colors[3]);`,
    correctCode: `let colors = ["red", "green", "blue"];
console.log(colors[2]); // or add a 4th element`,
    hints: [
      "Count the array elements",
      "Arrays start counting from 0"
    ],
    explanation: "Arrays are zero-indexed. An array with 3 elements has indices 0, 1, and 2. Index 3 doesn't exist.",
    points: 75,
    lineNumbers: [2]
  },
  {
    id: "9",
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
    id: "10",
    title: "Wrong Loop Direction",
    description: "This countdown loop has a logical error.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `for (let i = 10; i > 0; i++) {
  console.log(i);
}`,
    correctCode: `for (let i = 10; i > 0; i--) {
  console.log(i);
}`,
    hints: [
      "Look at the increment/decrement operator",
      "Which direction should the counter go?"
    ],
    explanation: "For a countdown from 10 to 1, use 'i--' to decrement. Using 'i++' creates an infinite loop since i keeps growing.",
    points: 75,
    lineNumbers: [1]
  },
  {
    id: "11",
    title: "Case Sensitivity Error",
    description: "JavaScript is case-sensitive. Find the case mismatch.",
    type: "syntax",
    difficulty: "easy",
    codeWithBugs: `function calculateArea(width, height) {
  return width * Height;
}

console.log(calculateArea(5, 10));`,
    correctCode: `function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10));`,
    hints: [
      "Check the parameter names carefully",
      "JavaScript is case-sensitive"
    ],
    explanation: "JavaScript variable names are case-sensitive. 'Height' with capital H doesn't match the parameter 'height'.",
    points: 50,
    lineNumbers: [2]
  },
  {
    id: "12",
    title: "String Concatenation Error",
    description: "Fix the string concatenation to display the message properly.",
    type: "logic",
    difficulty: "easy",
    codeWithBugs: `let name = "Alice";
let age = 25;
let message = "Hello, " + name + " you are " age + " years old";
console.log(message);`,
    correctCode: `let name = "Alice";
let age = 25;
let message = "Hello, " + name + " you are " + age + " years old";
console.log(message);`,
    hints: [
      "Look at the string concatenation operators",
      "Every string piece needs a '+' operator"
    ],
    explanation: "String concatenation requires '+' operators between all parts. Missing '+' before 'age' causes a syntax error.",
    points: 75,
    lineNumbers: [3]
  },

  // MEDIUM LEVEL - Complex Logic and Algorithms (Level 2-3)
  {
    id: "13",
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
    id: "14",
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
  },
  {
    id: "15",
    title: "Callback Function Error",
    description: "This array method is not working as expected.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
  num * 2; // Missing return
});
console.log(doubled);`,
    correctCode: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
  return num * 2; // Added return
});
console.log(doubled);`,
    hints: [
      "The map function expects the callback to return a value",
      "What's missing from the callback function?"
    ],
    explanation: "Array.map() callback functions must return a value. Without 'return', the function returns undefined for each element.",
    points: 100,
    lineNumbers: [3]
  },
  {
    id: "16",
    title: "Object Property Access",
    description: "Fix the way this code accesses object properties.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(person[firstName]);`,
    correctCode: `let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(person.firstName); // or person["firstName"]`,
    hints: [
      "Property names need quotes when using bracket notation",
      "Or use dot notation instead"
    ],
    explanation: "When using bracket notation, property names must be strings. Use person['firstName'] or person.firstName.",
    points: 100,
    lineNumbers: [7]
  },
  {
    id: "17",
    title: "Conditional Logic Bug",
    description: "This age validation has a logical flaw.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(18)); // Should return true`,
    correctCode: `function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(18)); // Now returns true`,
    hints: [
      "What happens when age is exactly 18?",
      "Should 18-year-olds be able to vote?"
    ],
    explanation: "The condition should be '>=' not '>'. People aged exactly 18 should be able to vote, but the original condition excludes them.",
    points: 100,
    lineNumbers: [2]
  },
  {
    id: "18",
    title: "Array Filter Logic",
    description: "This filter function isn't working correctly.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(num) {
  if (num % 2 = 0) {
    return true;
  }
  return false;
});
console.log(evenNumbers);`,
    correctCode: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});
console.log(evenNumbers);`,
    hints: [
      "Check the comparison operator in the if statement",
      "Are you comparing or assigning?"
    ],
    explanation: "Use '===' for comparison, not '=' which is assignment. The condition should check if the remainder equals 0.",
    points: 100,
    lineNumbers: [3]
  },
  {
    id: "19",
    title: "Function Parameter Mismatch",
    description: "This function call doesn't match the function definition.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function calculateRectangleArea(length, width) {
  return length * width;
}

let area = calculateRectangleArea(5); // Missing second parameter
console.log(area);`,
    correctCode: `function calculateRectangleArea(length, width) {
  return length * width;
}

let area = calculateRectangleArea(5, 3); // Added second parameter
console.log(area);`,
    hints: [
      "Count the function parameters",
      "How many arguments are being passed?"
    ],
    explanation: "The function expects two parameters (length and width) but only one argument is provided, making width undefined and the result NaN.",
    points: 100,
    lineNumbers: [5]
  },
  {
    id: "20",
    title: "String Method Error",
    description: "This string manipulation has a bug.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `let text = "Hello World";
let upperText = text.toUpperCase;
console.log(upperText);`,
    correctCode: `let text = "Hello World";
let upperText = text.toUpperCase();
console.log(upperText);`,
    hints: [
      "How do you call a method on an object?",
      "Methods need parentheses to be executed"
    ],
    explanation: "Methods must be called with parentheses. Without them, you're getting a reference to the function, not executing it.",
    points: 100,
    lineNumbers: [2]
  },
  {
    id: "21",
    title: "Nested Loop Logic",
    description: "This nested loop to create a multiplication table has an error.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; i++) { // Wrong increment variable
    console.log(i + " x " + j + " = " + (i * j));
  }
}`,
    correctCode: `for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) { // Fixed: increment j, not i
    console.log(i + " x " + j + " = " + (i * j));
  }
}`,
    hints: [
      "Look at the increment part of both loops",
      "Which variable should be incremented in the inner loop?"
    ],
    explanation: "The inner loop should increment 'j', not 'i'. Incrementing 'i' in both loops causes unexpected behavior and potential infinite loops.",
    points: 125,
    lineNumbers: [2]
  },
  {
    id: "22",
    title: "Boolean Logic Error",
    description: "This validation function has incorrect boolean logic.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function isValidPassword(password) {
  return password.length >= 8 || password.includes("@");
}

// Should require BOTH length >= 8 AND special character
console.log(isValidPassword("12345@")); // Should be false`,
    correctCode: `function isValidPassword(password) {
  return password.length >= 8 && password.includes("@");
}

// Now requires BOTH conditions
console.log(isValidPassword("12345@")); // Now returns false`,
    hints: [
      "Should the password meet one condition OR both conditions?",
      "What's the difference between && and ||?"
    ],
    explanation: "Use '&&' (AND) when both conditions must be true. '||' (OR) means only one condition needs to be true, which is too permissive for password validation.",
    points: 125,
    lineNumbers: [2]
  },
  {
    id: "23",
    title: "Array Modification Bug",
    description: "This function should remove the last element but has a bug.",
    type: "logic",
    difficulty: "medium",
    codeWithBugs: `function removeLastElement(arr) {
  arr.pop;
  return arr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(removeLastElement(numbers));`,
    correctCode: `function removeLastElement(arr) {
  arr.pop();
  return arr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(removeLastElement(numbers));`,
    hints: [
      "Methods need to be called, not just referenced",
      "Add parentheses to execute the method"
    ],
    explanation: "Array methods like pop() must be called with parentheses. Without them, you're just referencing the method, not executing it.",
    points: 100,
    lineNumbers: [2]
  },

  // HARD LEVEL - Advanced Algorithms and Optimization (Level 4+)
  {
    id: "24",
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
    id: "25",
    title: "Binary Search Bug",
    description: "This binary search implementation has a subtle bug that causes incorrect results.",
    type: "algorithm",
    difficulty: "hard",
    codeWithBugs: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return -1;
}`,
    correctCode: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1; // Fixed: should be length - 1
  
  while (left <= right) { // Fixed: should be <= not <
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1; // Fixed: should be mid - 1
    }
  }
  
  return -1;
}`,
    hints: [
      "Check the initial value of 'right'",
      "Look at the while loop condition",
      "When updating 'right', what should it be set to?"
    ],
    explanation: "Binary search bugs: 1) right should start at length-1, not length 2) loop condition should be <=, not < 3) right should be mid-1, not mid.",
    points: 175,
    lineNumbers: [3, 5, 13]
  },
  {
    id: "26",
    title: "Recursive Function Stack Overflow",
    description: "This recursive function causes a stack overflow. Fix the base case.",
    type: "algorithm",
    difficulty: "hard",
    codeWithBugs: `function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0)); // This will cause issues`,
    correctCode: `function factorial(n) {
  if (n <= 1) { // Fixed: handle 0 and 1
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0)); // Now works correctly`,
    hints: [
      "What happens when n is 0?",
      "The base case needs to handle edge cases",
      "Factorial of 0 is defined as 1"
    ],
    explanation: "The base case only handled n === 1, but factorial(0) should also return 1. Without this, factorial(0) causes infinite recursion.",
    points: 150,
    lineNumbers: [2]
  },
  {
    id: "27",
    title: "Memory Leak in Event Listeners",
    description: "This code creates a memory leak. Fix the event listener management.",
    type: "optimization",
    difficulty: "hard",
    codeWithBugs: `function setupButton() {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  
  button.addEventListener('click', function() {
    console.log('Button clicked!');
  });
  
  document.body.appendChild(button);
  
  // Simulating removal without cleanup
  setTimeout(() => {
    document.body.removeChild(button);
  }, 5000);
}`,
    correctCode: `function setupButton() {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  
  function handleClick() {
    console.log('Button clicked!');
  }
  
  button.addEventListener('click', handleClick);
  document.body.appendChild(button);
  
  // Proper cleanup
  setTimeout(() => {
    button.removeEventListener('click', handleClick);
    document.body.removeChild(button);
  }, 5000);
}`,
    hints: [
      "Event listeners should be removed when elements are removed",
      "Create a named function for the event handler",
      "Use removeEventListener before removing the element"
    ],
    explanation: "Always remove event listeners before removing DOM elements to prevent memory leaks. Use named functions so you can reference them in removeEventListener.",
    points: 175,
    lineNumbers: [5, 12, 13]
  },
  {
    id: "28",
    title: "Async/Await Error Handling",
    description: "This async function doesn't handle errors properly.",
    type: "logic",
    difficulty: "hard",
    codeWithBugs: `async function fetchUserData(userId) {
  const response = await fetch('/api/users/' + userId);
  const userData = await response.json();
  return userData;
}

// Usage
fetchUserData(123).then(data => {
  console.log(data);
});`,
    correctCode: `async function fetchUserData(userId) {
  try {
    const response = await fetch('/api/users/' + userId);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw to let caller handle it
  }
}

// Usage
fetchUserData(123)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Failed to load user:', error);
  });`,
    hints: [
      "Async functions should use try-catch blocks",
      "Check if the HTTP response was successful",
      "Handle errors in the calling code too"
    ],
    explanation: "Async functions need try-catch for error handling. Also check response.ok before parsing JSON, and handle errors in the calling code.",
    points: 175,
    lineNumbers: [2, 3, 4, 8, 9, 10]
  },
  {
    id: "29",
    title: "Closure Memory Issue",
    description: "This code creates unnecessary closures that waste memory.",
    type: "optimization",
    difficulty: "hard",
    codeWithBugs: `function createButtons() {
  let buttons = [];
  
  for (let i = 0; i < 1000; i++) {
    buttons.push(function() {
      console.log('Button ' + i + ' clicked');
      // Each closure captures the entire scope
      let largeData = new Array(10000).fill('data');
      return largeData.length;
    });
  }
  
  return buttons;
}`,
    correctCode: `function createButtons() {
  let buttons = [];
  
  function createButtonHandler(index) {
    return function() {
      console.log('Button ' + index + ' clicked');
      // Only capture what's needed
      let largeData = new Array(10000).fill('data');
      return largeData.length;
    };
  }
  
  for (let i = 0; i < 1000; i++) {
    buttons.push(createButtonHandler(i));
  }
  
  return buttons;
}`,
    hints: [
      "Each closure captures the entire scope",
      "Create a factory function to limit closure scope",
      "Only capture the variables you actually need"
    ],
    explanation: "The original creates 1000 closures each capturing the entire loop scope. The fixed version uses a factory function to create minimal closures.",
    points: 175,
    lineNumbers: [5, 6, 7, 8, 9]
  },
  {
    id: "30",
    title: "Inefficient DOM Manipulation",
    description: "This code causes multiple reflows. Optimize the DOM updates.",
    type: "optimization",
    difficulty: "hard",
    codeWithBugs: `function addListItems(items) {
  let list = document.getElementById('myList');
  
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement('li');
    li.textContent = items[i];
    list.appendChild(li); // Causes reflow each time
  }
}`,
    correctCode: `function addListItems(items) {
  let list = document.getElementById('myList');
  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement('li');
    li.textContent = items[i];
    fragment.appendChild(li); // Add to fragment first
  }
  
  list.appendChild(fragment); // Single DOM update
}`,
    hints: [
      "Multiple DOM appendChild calls cause performance issues",
      "Use DocumentFragment to batch DOM updates",
      "Minimize reflows and repaints"
    ],
    explanation: "Each appendChild call causes a reflow. Using DocumentFragment allows batching all changes into a single DOM update, greatly improving performance.",
    points: 175,
    lineNumbers: [5, 6, 7]
  },
  {
    id: "31",
    title: "Promise Chain Error",
    description: "This promise chain doesn't handle errors correctly and has a bug.",
    type: "logic",
    difficulty: "hard",
    codeWithBugs: `function processData(data) {
  return Promise.resolve(data)
    .then(result => {
      return result.map(item => item.toUpperCase());
    })
    .then(result => {
      return result.filter(item => item.length > 3);
    })
    .then(result => {
      console.log('Processed data:', result);
      return result;
    });
}

processData(['hello', 'world', 'hi']);`,
    correctCode: `function processData(data) {
  return Promise.resolve(data)
    .then(result => {
      if (!Array.isArray(result)) {
        throw new Error('Data must be an array');
      }
      return result.map(item => {
        if (typeof item !== 'string') {
          throw new Error('All items must be strings');
        }
        return item.toUpperCase();
      });
    })
    .then(result => {
      return result.filter(item => item.length > 3);
    })
    .then(result => {
      console.log('Processed data:', result);
      return result;
    })
    .catch(error => {
      console.error('Error processing data:', error);
      throw error; // Re-throw for caller to handle
    });
}

processData(['hello', 'world', 'hi'])
  .catch(error => {
    console.error('Failed to process:', error);
  });`,
    hints: [
      "What if the input data is not an array?",
      "What if array items are not strings?",
      "Add error handling with .catch()"
    ],
    explanation: "The original code assumes valid input. The fixed version validates data types and adds proper error handling throughout the promise chain.",
    points: 175,
    lineNumbers: [3, 4, 5, 11, 12]
  },
  {
    id: "32",
    title: "Race Condition Bug",
    description: "This code has a race condition that causes inconsistent results.",
    type: "algorithm",
    difficulty: "hard",
    codeWithBugs: `let counter = 0;

function incrementAsync() {
  setTimeout(() => {
    let temp = counter;
    temp = temp + 1;
    counter = temp;
    console.log('Counter:', counter);
  }, Math.random() * 100);
}

// Multiple async increments
for (let i = 0; i < 5; i++) {
  incrementAsync();
}`,
    correctCode: `let counter = 0;
let isUpdating = false;
let pendingUpdates = 0;

function incrementAsync() {
  pendingUpdates++;
  
  setTimeout(() => {
    if (!isUpdating) {
      isUpdating = true;
      counter += pendingUpdates;
      console.log('Counter:', counter);
      pendingUpdates = 0;
      isUpdating = false;
    }
  }, Math.random() * 100);
}

// Alternative solution using atomic operations
function incrementAsyncAtomic() {
  setTimeout(() => {
    // Atomic increment using a single operation
    console.log('Counter:', ++counter);
  }, Math.random() * 100);
}

// Multiple async increments
for (let i = 0; i < 5; i++) {
  incrementAsyncAtomic(); // Using the atomic version
}`,
    hints: [
      "Multiple async operations can interfere with each other",
      "The read-modify-write operation is not atomic",
      "Consider using locks or atomic operations"
    ],
    explanation: "The race condition occurs because multiple async operations can read the same counter value before any of them write back. The fix uses either locking or atomic operations.",
    points: 200,
    lineNumbers: [5, 6, 7]
  }
];

export const getNextChallenge = (completedChallenges: string[]): Challenge | null => {
  return challenges.find(challenge => !completedChallenges.includes(challenge.id)) || null;
};

export const calculateLevel = (score: number): number => {
  return Math.floor(score / 200) + 1;
};