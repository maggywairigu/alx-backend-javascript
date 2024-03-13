interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors extends Teacher{
    numberOfReports: number
}

let teacher: Teacher = {
    firstName: 'Mark',
    lastName: 'Mugo',
    fullTimeEmployee: true,
    yearsOfExperience: 3,
    location: "Kasarani",
    contract: true
}

console.log(teacher);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(director1);

function printTeacher (firstName: string, lastName: string) {
    console.log(firstName.charAt(0) + '. ' + lastName)
}

printTeacher("John", "Doe")

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return `${this.firstName}`
    }
}

let student3 = new StudentClass('Mark', 'Mugo')
console.log(student3.displayName())
console.log(student3.firstName)
console.log(student3.lastName)
console.log(student3.workOnHomework())