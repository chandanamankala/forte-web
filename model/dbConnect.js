const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employeedb"
});


connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connection is created to db.");
});

module.exports = connection;