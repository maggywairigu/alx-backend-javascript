# ALX Backend JavaScript - ES6 Classes

This project contains implementations of various ES6 classes as part of the ALX Backend JavaScript curriculum.

## Curriculum

- Short Specializations
- Average: 0.0%
- 0x02. ES6 classes
- OOP
- JavaScript
- ES6
- By: Johann Kerbrat, Engineering Manager at Uber Works
- Weight: 1
- Project will start Mar 7, 2024 6:00 AM, must end by Mar 8, 2024 6:00 AM
- Checker was released at Mar 7, 2024 12:00 PM
- An auto review will be launched at the deadline

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test

## Setup

1. Install NodeJS 12.11.x
   - In your home directory:
     ```bash
     curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     nodejs -v
     npm -v
     ```
2. Install Jest, Babel, and ESLint
   - In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

## Configuration files

Add the following files to your project directory:
- package.json
- babel.config.js
- .eslintrc.js

Don’t forget to run `npm install` when you have the package.json

## Tasks

1. **ClassRoom**
   - Implement a class named `ClassRoom`
   - Prototype: `export default class ClassRoom`
   - It should accept one attribute named `maxStudentsSize` (Number) and assign it to `_maxStudentsSize`
   - Example usage:
     ```javascript
     import ClassRoom from "./0-classroom.js";
     const room = new ClassRoom(10);
     console.log(room._maxStudentsSize)
     ```

2. **Initialize Rooms**
   - Import the `ClassRoom` class from `0-classroom.js`
   - Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34

3. **HolbertonCourse**
   - Implement a class named `HolbertonCourse`
   - Constructor attributes: `name` (String), `length` (Number), `students` (array of Strings)
   - Implement a getter and setter for each attribute

4. **Currency**
   - Implement a class named `Currency`
   - Constructor attributes: `code` (String), `name` (String)
   - Implement a getter and setter for each attribute
   - Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`

5. **Pricing**
   - Import the `Currency` class from `3-currency.js`
   - Implement a class named `Pricing`
   - Constructor attributes: `amount` (Number), `currency` (Currency)
   - Implement a getter and setter for each attribute
   - Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`
   - Implement a static method named `convertPrice` that accepts `amount` (Number) and `conversionRate` (Number) and returns the amount multiplied by the conversion rate

6. **Building**
   - Implement a class named `Building`
   - Constructor attributes: `sqft` (Number)
   - Implement a getter for each attribute
   - Make this class an abstract class and require any class that extends from it to implement a method named `evacuationWarningMessage`

7. **SkyHighBuilding**
   - Import `Building` from `5-building.js`
   - Implement a class named `SkyHighBuilding` that extends `Building`
   - Constructor attributes: `sqft` (Number) (assigned to the parent class `Building`), `floors` (Number)
   - Implement a getter for each attribute
   - Override the method `evacuationWarningMessage` and return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`

8. **Airport**
   - Implement a class named `Airport`
   - Constructor attributes: `name` (String), `code` (String)
   - Implement a getter for each attribute
   - The default string description of the class should return the airport code

9. **HolbertonClass**
   - Implement a class named `HolbertonClass`
   - Constructor attributes: `size` (Number), `location` (String)
   - When the class is cast into a Number, it should return the size
   - When the class is cast into a String, it should return the location

10. **Car**
    - Implement a class named `Car`
    - Constructor attributes: `brand` (String), `motor` (String), `color` (String)
    - Implement a method named `cloneCar` that returns a new object of the class

Copyright © 2024 ALX, All rights reserved.
