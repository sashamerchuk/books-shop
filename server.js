let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'root',
    user: 'root',
    password: 'sashamerchukqwerty12'   
});

connection.connect(function(err){
    if(err){
        console.log("Error",err.stack);
        return;
    }
    console.log('connected as id', connection.threadId);
});