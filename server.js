const inquirer = require("inquirer");

const cTable = require("console.table");
const mysql = require("mysql2");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
// const showAllEmployees = require("./db/index");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password1!",
    database: "company_db",
  },
  console.log(`Connected to company database.`)
);

db.connect(function (err) {
  if (err) throw err;
  init();
});

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//opening prompt
const openingPrompt = [
  {
    type: "list",
    name: "firstPrompt",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add an Employee",
      "Update Employee Role",
      "View All Roles",
      "Add a Role",
      "View All Departments",
      "Add a Department",
      "Quit",
    ],
  },
];

function showAllEmployees() {
  console.log("hello");
  let sql = "SELECT * FROM employee;";
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Employees Found");
    console.table(res);
    init();
  });
}

function addEmployee() {
  db.query("SELECT * FROM role", function (err,res) {
    if (err) throw err;
    inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's fist name? ",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name? ",
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the employee's manager's ID? ",
      },
    ]);
    
  })
};

function updateEmployeeRole() {

};

function viewAllRoles() {
  console.log("hello");
  let sql = "SELECT * FROM role;";
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Roles Found");
    console.table(res);
    init();
  });
};

function addRole() {

};

function ViewAllDepartments() {
  console.log("hello");
  let sql = "SELECT * FROM department;";
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Departments Found");
    console.table(res);
    init();
  });
};

function addDepartment() {

};

function quit() {
  Connection.end();
};

function init() {
  inquirer.prompt(openingPrompt).then((a) => {
    switch (a.firstPrompt) {
      case "View All Employees":
        showAllEmployees();
        break;

      case "Add an Employee":
        addEmployee();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "Add a Role":
        addRole();
        break;

      case "View All Departments":
        ViewAllDepartments();
        break;

      case "Add Department":
        addDepartment();
        break;

      case "Quit":
        console.log("hi");
        quit();
        break;

      default:
        break;
    }
  });
}



// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
