interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string{
        return 'Working from home'
    }

    getCoffeeBreak(): string{
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string{
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string{
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string{
        return 'Cannot have a break'
    }

    workTeacherTasks(): string{
        return 'Getting to work'
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
