// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// defining employee data as variables: their first name, last name, and salary.
class Employee {
  constructor(firstName, lastName, salary) {
      this.firstName= firstName;
      this.lastName = lastName;
      this.salary = salary;
  }
}
const collectEmployees = function(){
  // TODO: Get user input to create and return an array of employee objects
    const numEmployees = parseInt(prompt("Enter the number of employees:"));
    const employees = [];

    for (let i = 0; i < numEmployees; i++) {
        const firstName = prompt(`Enter first name for employee ${i + 1}:`);
        const lastName = prompt(`Enter last name for employee ${i + 1}:`);
        const salary = parseFloat(prompt(`Enter salary for employee ${i + 1}:`));

        employees.push(new Employee(firstName, lastName,salary));
    }

    return employees;
};

// Display the average salary
  // TODO: Calculate and display the average salary
  const displayAverageSalary = function(employeesArray) {
    // Calculate total salary
    let totalSalary = 0;
    for (const employee of employeesArray) {
        totalSalary += employee.salary;
    }

    // Compute average salary
    const numEmployees = employeesArray.length;
    const averageSalary = totalSalary / numEmployees;

    // Display the result
    console.log(`Average Salary is $${averageSalary.toFixed(2)}`);
};



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];
console.log("Random Employee:");
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
