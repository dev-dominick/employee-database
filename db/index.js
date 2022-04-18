const db = require("../server")

function showAllEmployees() {
  let employee = db.query(
    "SELECT * FROM employee;"
    
  )
  console.table(employee)
};

module.exports = showAllEmployees;