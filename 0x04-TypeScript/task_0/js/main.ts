interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  let student1: Student = {firstName: "Mark", lastName: "Mugo", age: 22, location: "Kasarani"};
  let student2: Student = {firstName: "Margaret", lastName: "Maina", age: 21, location: "Kabete"};
  
  let studentsList: Student[] = [student1, student2]
  
  function renderTable() {
  
    studentsList.forEach((student) => {
      let table = document.createElement('table');
      let body = document.createElement('tbody');
      table.appendChild(body)
  
      let row = document.createElement('tr');
      let nameCell = document.createElement('td');
      let locationCell = document.createElement('td');
  
      nameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(nameCell);
      row.appendChild(locationCell);
  
      body.appendChild(row);
    })
  }