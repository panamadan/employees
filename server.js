const inquriere
cionst connneciton

// connection.connect(function (err) {
//     if (err) throw (err)
//     mainApp()
// });

connection.connect((err) => {
    if (err) throw (err)
    mainApp()

});

function mainApp() {
    inquirer
        .prompt([{
            type: "list",
            name: "firstQuestion",
            message: "what would you like to do?",
            choices: [
                "View all employess",
                "View employees by department",
                "Add new employee",
                "update employee role",
                "delete employee"

            ]
        }])
        .then(function (answer) {
            switch (answer.firstQuestion) {
                case "view all employees":
                    viewAllEmployess()
                    break;
                case "View employees by department":
                    viewEmployeesDept()
                    break;
                case "Add new employee":
                    addEmployee()
                    break;
                case "update employee role":
                    upddateEmployeeRole()
                    break;
                case "delete employee":
                    deleteEmployee()
                    break;

            }

        })
    function viewAllEmployess() {

    };
    function viewEmployeesDept() {

    };
    function addEmployee() {

    };
    function deleteEmployee() {

    }

}