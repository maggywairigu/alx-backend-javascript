# Project Name

### Curriculum Short Specializations Average: 0.0%

This project focuses on mastering ES6 Basics in JavaScript, covering essential concepts and features introduced in ECMAScript 2015.

## Project Description

In this project, you will dive into ES6 basics, learning about new features, such as arrow functions, default parameters, rest parameters, string templating, object creation, and iterators. The project aims to enhance your understanding of JavaScript programming and software linters.

## Learning Objectives

- Understand ES6 basics and new features
- Differentiate between constants and variables
- Grasp block-scoped variables
- Master arrow functions and default function parameters
- Explore rest and spread function parameters
- Learn string templating in ES6
- Understand object creation and properties in ES6
- Work with iterators and for-of loops

## Requirements

- NodeJS 12.11.x
- Ubuntu 18.04 LTS
- Editors: vi, vim, emacs, Visual Studio Code
- Files must end with a new line
- Use the js extension for your code
- Test your code using the Jest Testing Framework
- Analyze your code using ESLint with provided rules
- Export all functions

## Setup

1. Install NodeJS 12.11.x:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```

2. Install Jest, Babel, and ESLint:

   ```bash
   npm install
   ```

## Tasks

### 0. Const or let?

Modify the `taskFirst` and `taskNext` functions to use `const` and `let` for variable instantiation.

### 1. Block Scope

Modify the `taskBlock` function to avoid overwriting variables inside the conditional block.

### 2. Arrow functions

Rewrite the `getNeighborhoodsList` function to use arrow function syntax.

### 3. Parameter defaults

Condense the `getSumOfHoods` function internals to use default parameter values.

### 4. Rest parameter syntax for functions

Modify the `returnHowManyArguments` function to return the number of arguments passed using the rest parameter syntax.

### 5. The wonders of spread syntax

Concatenate 2 arrays and each character of a string using spread syntax in the `concatArrays` function.

### 6. Take advantage of template literals

Rewrite the `getSanFranciscoDescription` function to use template literals for variable substitution.

### 7. Object property value shorthand syntax

Modify the `getBudgetObject` function to use the key name instead of repeating variable names.

### 8. No need to create empty objects before adding in properties

Rewrite the `getBudgetForCurrentYear` function to use computed property names on the budget object.

### 9. ES6 method properties

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.

### 10. For...of Loops

Rewrite the `appendToEachArrayValue` function to use ES6’s for...of operator and avoid using `var`.

### 11. Iterator

Write a function named `createEmployeesObject` to return an object with a department name and a list of employees.

### 12. Let's create a report object

Write a function named `createReportObject` to return an object containing all employees and a method to get the number of departments.

---

**Note:** Remember to run `npm install` from your project folder to install all necessary project dependencies.

## Copyright

Copyright © 2024 ALX, All rights reserved.