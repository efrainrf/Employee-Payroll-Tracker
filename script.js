// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
// defining employee data as variables: their first name, last name, and salary.
// did research on what the class does and it along with the constructor method are used to create multiple
// object declarations that I can call on in a later function
class Employee {
  constructor(firstName, lastName, salary) {
      this.firstName= firstName;
      this.lastName = lastName;
      this.salary = salary;
  }
}
  // I am declaring the function and using parseInt to convert the data given by the user into a number/integer
  const collectEmployees = function(){  
  const numEmployees = parseInt(prompt("Enter the number of employees:"));
    const employees = [];
// This for loop is collecting the names and salary of the specified amount of people the user entered in the previous
//prompt.
    for (let i = 0; i < numEmployees; i++) {
        const firstName = prompt(`Enter first name for employee ${i + 1}:`);
        const lastName = prompt(`Enter last name for employee ${i + 1}:`);
        const salary = parseInt(prompt(`Enter salary for employee ${i + 1}:`));
//Below I am adding the data into the employee object using the push method. I am pushing the name(s) and salary
//objects into said array
        employees.push(new Employee(firstName, lastName,salary));
    }

    return employees;
};

// Display the average salary
  // TODO: Calculate and display the average salary
  const displayAverageSalary = function(employeesArray) {
    // The for of loop is used to find the total salary of all the employees.
    let totalSalary = 0;
    for (const employee of employeesArray) {
        totalSalary += employee.salary;
    }

    // This obtains the number of employees the user has entered.
    const numEmployees = employeesArray.length;
    // Here the average salary is calculated by diving the total of all employees by the numeber of employees.
    //It is stored in the averageSalary object that is used below.
    const averageSalary = totalSalary / numEmployees;

    // the average is logged in the console by calling averageSalary inside the string.
    console.log(`Average Salary is $${averageSalary}`);
};



// Select a random employee
 // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
//Make randonIndex equal a random number from the employee array using the math methods.
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
//Make randomEmployee equal the randomly selected employee given in the previous line.
  const randomEmployee = employeesArray[randomIndex];
console.log(`Random employee`);
//Had to console log twice because I got "object object" for some reason when I used the variable in the string.
console.log(randomEmployee);
return randomEmployee;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
