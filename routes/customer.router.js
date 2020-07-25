const routes = require('express').Router();


    const employees = require('../controllers/customer.controller.js')
  
    routes.post("/addEmployee", employees.create);
    
    routes.get("/getAllEmployees", employees.findAll);
     
    routes.get("/getEmployeeById/:employeeId", employees.findById);
  
    routes.post("/login",employees.validateLogin);
   
  
module.exports = routes;