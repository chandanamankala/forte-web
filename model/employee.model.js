const sql = require("./dbConnect.js");

// constructor
const Employee = function(employee) {
  this.name = employee.name;
  this.lastname = employee.lastname;
  this.email = employee.email;
  this.type = employee.type;
};

Employee.create = (newEmployee, result) => {
  sql.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created employee: ", { id: res.insertId, ...newEmployee });
    result(null, { id: res.insertId, ...newEmployee });
  });
};

Employee.findById = (employeeId, result) => {
  sql.query(`SELECT * FROM employee WHERE id = ${employeeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("employee Found: ", res[0]);
      result(null, res[0]);
      return;
    }
    result( "not_found" , null);
  });
};

Employee.getAll = result => {
  sql.query("SELECT * FROM employee", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("employee list: ", res);
    result(null, res);
  });
};

module.exports = Employee;