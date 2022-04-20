DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,

  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,

  title VARCHAR(30) NOT NULL,

  salary INT NOT NULL,

  department_id INT NOT NULL

  /* FOREIGN KEY (department_id) REFERENCES department(id) */
  
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,

  first_name VARCHAR(30) NOT NULL,

  last_name VARCHAR(30)  NOT NULL,

  role_id INT NOT NULL,

  manager_id INT

  /* FOREIGN KEY (role_id) REFERENCES role(id),

  FOREIGN KEY (manager_id) REFERENCES employee(id) */

);