INSERT INTO department (name)
VALUES ("HR"),
       ("Engineering");


INSERT INTO role (title, salary, department_id)
VALUES ("HR rep", 50000, 1),
       ("Software Engineer", 100000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ben", 'Dover', 1, 1),
       ("Mike", 'Vick', 2, 2);
