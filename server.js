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

function mainApp(){
    prompt([{
        type : "list",
        name : "firstQuestion"
        message : "what would you like to do?"
        choices :
    }])
    .then(function(answer){
        switch(answer.firstQuestion){
            case "view all employees":
                viewAllEmployess()
                break;
                case " jndfdng"
        

        }

    })
function viewAllEmployess() {
    
}
    
}