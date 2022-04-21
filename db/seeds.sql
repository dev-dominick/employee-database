INSERT INTO department (name)
VALUES ("HR"),
       ("Engineering"),
       ("Legal"),
       ("IT"),
       ("Marketing");


INSERT INTO role (title, salary, department_id)
VALUES ("HR rep", 50000, 1),
       ("Software Engineer", 100000, 2)
       ("Lawyer", 75000, 3)
       ("Computer Specialist", 80000, 4)
       ("Media Connections", 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ben", 'Low', 1, 1),
       ("Nick", 'Vick', 2, 2)
       ("Johnny", 'Steaks', 3, 3)
       ("Bob", 'Smith', 4, 4)
       ("John", 'Dunkin', 5, 5);
