let connection = require("../connection")

const queries = {
    findAllemployees: function(){
        connection.query("Select employee.id, employee.first_name, employee.last_name, role.title, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id")
    }
}
