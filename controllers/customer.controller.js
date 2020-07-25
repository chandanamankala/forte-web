const employee = require("../model/employee.model.js");
const author = require("../model/author.model.js");

exports.validateLogin = (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username && !password) {
    res.status(400).send({
      message: "username and password can not be empty!"
    });
  }
  author.validateLogin(username,password,(err,data)=>{
    if (err === "invalid credentials"){
      console.log('======err=====',err);
      res.status(500).send({
        message:"invalid username and password."
      });
    }else if(err)
    res.status(500).send({
      message:"error in fecting details from db."
    });
  else res.send(data);
  });
}

// Create and Save a new employee
exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    const  error = validateUser(req.body);
      if (error.error){
      res.status(400).send(error.error.details[0].message)
      return;
      }
      const employee = new employee({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        status: req.body.status
      });
  
      employee.create(employee, (err, data) => {
        if (err)
          res.status(500).send({
            message:"Error occurred while creating the employee."
          });
        else res.send(data);
      });
};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  
    employee.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:"Some error occurred while retrieving employees."
          });
        else res.send(data);
      });
};

exports.findById = (req, res) => {
  if (!req.params.employeeId) {
    res.status(400).send({
      message: "parameter can not be empty!"
    });
  }
  employee.findById(req.params.employeeId,(err,data)=>{
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "employee Not found  with id : "+req.params.employeeId
        });
      } else {
        res.status(500).send({
          message: "Error retrieving employee with id " + req.params.employeeId
        });
      }
    } else res.send(data);
  });
};
