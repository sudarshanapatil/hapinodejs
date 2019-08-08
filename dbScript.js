const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sudri@123',
    database: 'demo',
    
});
connection.connect();
// connection.query('show databases',(error,res,feilds) =>{
//     //console.log(error,"   ========",res)
// })


//sql queries
//CREATE TABLE modality ( id int not null auto_increment, name varchar(20) not null, discription varchar(200) not null, comment varchar(400) not null ,primary key(id) );