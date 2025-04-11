// JavaScript Fundamentals

// 1. String Transformations
const capitalize = (str) => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverse = (str) => {
  if (!str) {
    return '';
  }
  return str.split('').reverse().join('');
};

const isPalindrome = (str) => {
  if (!str) {
    return true; // An empty string is considered a palindrome
  }
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = reverse(cleanStr);
  return cleanStr === reversedStr;
};

const wordCount = (str) => {
  if (!str) {
    return 0;
  }
  const words = str.trim().split(/\s+/);
  return words.length;
};

const toSnakeCase = (str) => {
  if (!str) {
    return '';
  }
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/\s+/g, '_');
};

const toCamelCase = (str) => {
  if (!str) {
    return '';
  }
  return str.toLowerCase().replace(/(_\w)/g, (match) => match[1].toUpperCase());
};

const longestWord = (str) => {
  if (!str) {
    return '';
  }
  const words = str.split(/\s+/);
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

const countLetter = (str, letter) => {
  if (!str || !letter) {
    return 0;
  }
  const lowerStr = str.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerLetter) {
      count++;
    }
  }
  return count;
};

// 2. Array Transformations
const double = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((num) => num * 2);
};

const filterEven = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((num) => num % 2 === 0);
};

const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, num) => acc + num, 0);
};

const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  return sum(arr) / arr.length;
};

const findMax = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr);
};

const findMin = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr);
};

const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
};

const findIndex = (arr, value) => {
  if (!Array.isArray(arr)) {
    return -1;
  }
  return arr.indexOf(value);
};

// 3. Object Transformations
const fullName = (person) => {
  if (!person || !person.firstName || !person.lastName) {
    return '';
  }
  return `${person.firstName} ${person.lastName}`;
};

const isAdult = (person) => {
  if (!person || typeof person.age !== 'number') {
    return false;
  }
  return person.age >= 18;
};

const filterByAge = (people, minAge) => {
  if (!Array.isArray(people)) {
    return [];
  }
  return people.filter((person) => person && typeof person.age === 'number' && person.age >= minAge);
};

const addProperty = (obj, key, value) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  obj[key] = value;
  return obj;
};

const hasProperty = (obj, key) => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  return obj.hasOwnProperty(key);
};

const countProperties = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return 0;
  }
  return Object.keys(obj).length;
};

// 4. Function Composition & Higher-Order Functions
const compose = (...fns) => (arg) => fns.reduceRight((res, fn) => fn(res), arg);

// a. Compose functions
// Example 1: Create a function to reverse and capitalize a string.
const reverseAndCapitalize = compose(capitalize, reverse);
console.log("Reverse and Capitalize:", reverseAndCapitalize("hello world")); // Output: dlrow olleW

// Example 2: Create a function to double all the even numbers in an array.
const doubleEven = compose(double, filterEven);
console.log("Double Even:", doubleEven([1, 2, 3, 4, 5, 6])); // Output: [ 4, 8, 12 ]

// b. Transform an array of objects
const transformStudents = (students) => {
  return students.map((student) => ({
    ...student,
    status: student.grades > 50 ? "Pass" : "Fail",
  }));
};

const studentsData = [
  { name: "Alice", grades: 85 },
  { name: "Bob", grades: 45 },
  { name: "Charlie", grades: 60 },
];
console.log("Transformed Students:", transformStudents(studentsData));
/*
Output:
[
  { name: 'Alice', grades: 85, status: 'Pass' },
  { name: 'Bob', grades: 45, status: 'Fail' },
  { name: 'Charlie', grades: 60, status: 'Pass' }
]
*/

// c. Sort array of objects
const sortPeopleByAge = (people) => {
  return [...people].sort((a, b) => a.age - b.age);
};

const peopleData = [
  { name: "Eve", age: 30 },
  { name: "David", age: 25 },
  { name: "Charlie", age: 35 },
];
console.log("Sorted People by Age:", sortPeopleByAge(peopleData));
/*
Output:
[
  { name: 'David', age: 25 },
  { name: 'Eve', age: 30 },
  { name: 'Charlie', age: 35 }
]
*/

// d. Filter by keyword
const filterProductsByCategory = (products, category) => {
  return products.filter((product) => product.category === category);
};

const productsData = [
  { name: "Laptop", category: "Electronics" },
  { name: "T-shirt", category: "Apparel" },
  { name: "Keyboard", category: "Electronics" },
  { name: "Jeans", category: "Apparel" },
];
console.log("Electronics Products:", filterProductsByCategory(productsData, "Electronics"));
/*
Output:
[
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Keyboard', category: 'Electronics' }
]
*/

// e. Simple caching function
const simpleCache = () => {
  const cache = {};

  return (func, arg) => {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      console.log("Cache hit!");
      return cache[key];
    } else {
      console.log("Cache miss!");
      const result = func(arg);
      cache[key] = result;
      return result;
    }
  };
};

const expensiveCalculation = (n) => {
  console.log("Performing expensive calculation for", n);
  return n * n;
};

const cachedCalculation = simpleCache();

console.log("First call:", cachedCalculation(expensiveCalculation, 5));
console.log("Second call:", cachedCalculation(expensiveCalculation, 5));
console.log("Third call:", cachedCalculation(expensiveCalculation, 10));
console.log("Fourth call:", cachedCalculation(expensiveCalculation, 10));