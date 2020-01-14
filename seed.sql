USE employeesDB;

INSERT into department(name)
values("Sales")

INSERT into employee_role(title, salary, department_id)
values("Sales Manager", 30000, 1)

INSERT into employee(first_name, last_name, role_id, manager_id)
values("David", "Duarte", 1, null)