Here's a README file for your project:

```markdown
# Curriculum Short Specializations

## Overview
This project focuses on ES6 data manipulation in JavaScript, covering topics like using `map`, `filter`, and `reduce` on arrays, working with typed arrays, and understanding the Set, Map, and WeakMap data structures.

## Learning Objectives
- Learn to use `map`, `filter`, and `reduce` on arrays
- Understand typed arrays
- Explore the Set, Map, and WeakMap data structures

## Requirements
- All files should be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest (`npm run test`)
- Code will be verified against ESLint (`npm run full-test`)
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
2. Check NodeJS and npm versions:
   ```bash
   nodejs -v
   npm -v
   ```
3. Install Jest, Babel, and ESLint:
   ```bash
   npm install
   ```

## Tasks
1. **Basic list of objects**
   - Function: `getListStudents`
   - Returns: Array of objects with id, firstName, and location attributes

2. **More mapping**
   - Function: `getListStudentIds`
   - Returns: Array of student ids from a list of objects

3. **Filter**
   - Function: `getStudentsByLocation`
   - Returns: Array of objects located in a specific city

4. **Reduce**
   - Function: `getStudentIdsSum`
   - Returns: Sum of all student ids

5. **Combine**
   - Function: `updateStudentGradeByCity`
   - Returns: Array of students for a specific city with their new grade

6. **Typed Arrays**
   - Function: `createInt8TypedArray`
   - Returns: New ArrayBuffer with an Int8 value at a specific position

7. **Set Data Structure**
   - Function: `setFromArray`
   - Returns: Set from an array

8. **More Set Data Structure**
   - Function: `hasValuesFromArray`
   - Returns: Boolean if all elements in the array exist within the set

9. **Clean Set**
   - Function: `cleanSet`
   - Returns: String of all set values that start with a specific string

10. **Map Data Structure**
    - Function: `groceriesList`
    - Returns: Map of groceries with name and quantity

11. **More Map Data Structure**
    - Function: `updateUniqueItems`
    - Returns: Updated map for items with initial quantity at 1

## Usage
- Run individual tasks: `npm run dev <task-main.js>`
- Test all tasks: `npm run full-test`

---

Copyright © 2024 ALX, All rights reserved.
```