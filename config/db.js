const mysql = require('mysql2');

const connection = mysql.createConnection(  
    {   
        host:'localhost',
        user:'root',
        port:'3306',
        password:'123456789',
        database:'loja'
    }
);

module.exports = connection.promisse();