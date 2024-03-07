# Project README

## Curriculum - Short Specializations
- **Average**: 0.0%
- **0x01. ES6 Promises**
  - **JavaScript**
  - **ES6**
  - **By:** Johann Kerbrat, Engineering Manager at Uber Works
  - **Weight:** 1
  

## Resources
- Read or watch:
  - [Promise](https://example.com)
  - [JavaScript Promise: An introduction](https://example.com)
  - [Await](https://example.com)
  - [Async](https://example.com)
  - [Throw / Try](https://example.com)

## Learning Objectives
- At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
  - Promises (how, why, and what)
  - How to use the then, resolve, catch methods
  - How to use every method of the Promise object
  - Throw / Try
  - The await operator
  - How to use an async function

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup
- Install NodeJS 12.11.x
  - (in your home directory):

    ```sh
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    ```
- Install Jest, Babel, and ESLint
  - In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

## Configuration Files
- Add the files below to your project directory:
  - [package.json](#)
  - [babel.config.js](#)
  - [utils.js](#) - Use when you get to tasks requiring uploadPhoto and createUser.
  - [.eslintrc.js](#)
- Don’t forget to run `$ npm install` when you have the package.json

## Response Data Format
- uploadPhoto returns a response with the format

  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
  ```

- createUser returns a response with the format

  ```json
  {
    "firstName": "Guillaume",
    "lastName": "Salva"
  }
  ```

## Tasks
1. **Keep every promise you make and only make promises you can keep**
   - **Mandatory**
   - **Score:** 0.0% (Checks completed: 0.0%)
   - Return a Promise using this prototype function `getResponseFromAPI()`
     ```sh
     bob@dylan:~$ cat 0-main.js
     import getResponseFromAPI from "./0-promise.js";

     const response = getResponseFromAPI();
     console.log(response instanceof Promise);

     bob@dylan:~$ 
     bob@dylan:~$ npm run dev 0-main.js 
     true
     bob@dylan:~$
     ```
   - **Repo:**
     - GitHub repository: [alx-backend-javascript](#)
     - Directory: 0x01-ES6_promise
     - File: 0-promise.js

2. **Don't make a promise...if you know you can't keep it**
   - **Mandatory**
   - **Score:** 0.0% (Checks completed: 0.0%)
   - Using the prototype below, return a promise. The parameter is a boolean.
     ```sh
     bob@dylan:~$ cat 1-main.js
     import getFullResponseFromAPI from './1-promise';

     console.log(getFullResponseFromAPI(true));
     console.log(getFullResponseFromAPI(false));

     bob@dylan:~$ 
     bob@dylan:~$ npm run dev 1-main.js 
     Promise { { status: 200, body: 'Success' } }
     Promise {
       <rejected> Error: The fake API is not working currently
         ...
         ...
     bob@dylan:~$
     ```
   - **Repo:**
     - GitHub repository: [alx-backend-javascript](#)
     - Directory: 0x01-ES6_promise
     - File: 1-promise.js

3. **Catch me if you can!**
   - **Mandatory**
   - **Score:** 0.0% (Checks completed: 0.0%)
   - Using the function prototype below
     ```javascript
     function handleResponseFromAPI(promise)
     ```
     Append three handlers to the function:
     - When the Promise resolves, return an object with the following attributes
       ```json
       {
         "status": 