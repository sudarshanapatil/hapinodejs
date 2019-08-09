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
// let query=`create table product (prodId int not null auto_increment,name varchar(20) not null, description varchar(200) not null,
// comment varchar(400) not null ,primary key(prodId),modId int,
// FOREIGN KEY (modId) REFERENCES modality(modId))`
//CREATE TABLE modality ( id int not null auto_increment, name varchar(20) not null, discription varchar(200) not null, comment varchar(400) not null ,primary key(id) );
//ALTER TABLE modality CHANGE `discription` `description` varchar(200);
