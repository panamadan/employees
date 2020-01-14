DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

CREATE TABLE department {
    id INT NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30) NULL,

};

create table employee_role {
id INT NOT NULL auto_increment PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL (10,4) NULL,
department_id INT,
index department_id,
KEY (department_id) REFERENCES employee_role(id) on DELETE CASCADE,

};

CREATE TABLE employee {
id int NOT NULL auto_increment PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
index role_id (role_id),
index manager_id (manager_id),
FOREIGN KEY (role_id) REFERENCES employee_role(id) on DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee(id) on DELETE CASCADE,
};



