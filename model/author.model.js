const sql = require("./dbConnect.js");

const Author = function(author) {
    this.employeeid = author.employeeId;
    this.username = author.username;
    this.password = author.password;
    this.role = author.role;
  };
  
Author.validateLogin = (username,password,result) => {
    console.log('username',username);
    sql.query("select * from author where username=? ",username,(err,res) => {
        if(err){     
        console.log("error: ", err);
        result(err, null);
         return;
        }
        if(res.length == 1){
            if(res[0].password == password){
               console.log("user with given credential found");
               
                result(null,res[0])
            }else{
               result('invalid credentials',null)
               return
            }   
        }
    });
}
module.exports = Author;