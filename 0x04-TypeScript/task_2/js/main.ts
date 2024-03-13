interface DirectorInterface {
    workFromHome(): void,
    getCoffeeBreak(): void,
    workDirectorTasks(): void,
}

interface TeacherInterface {
    workFromHome(): void,
    getCoffeeBreak(): void,
    workTeacherTasks(): void,
}

class Director implements DirectorInterface {
    workFromHome(): void{
        console.log('Working from home')
    }

    getCoffeeBreak(): void{
        console.log('Getting a coffee break')
    }

    workDirectorTasks(): void{
        console.log('Getting to director tasks')
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): void{
        console.log('Cannot work from home')
    }

    getCoffeeBreak(): void{
        console.log('Cannot have a break')
    }

    workTeacherTasks(): void{
        console.log('Getting to work')
    }    
}

function createEmployee(salary: string | number): Director | Teacher {
    const regex: RegExp = /^[0-9]/g;
    let parsedSalary: number = typeof salary === 'string' ? Number(salary.replace(regex, '')) : salary;
    return parsedSalary < 500 ? new Teacher : new Director;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector (employee: typeof Director | typeof Teacher) {
    employee === Director ? Director : Teacher
}

function executeWork (employee: any) {
    employee === isDirector ? new Director().workDirectorTasks() :
    new Teacher().workTeacherTasks();
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
