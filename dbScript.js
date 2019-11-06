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


//sql 
//TABLE PRODUCT
// let query=`create table product (prodId int not null auto_increment,name varchar(20) not null, description varchar(200) not null,
// comment varchar(400) not null ,primary key(prodId),modId int,
// FOREIGN KEY (modId) REFERENCES modality(modId))`

//TABLE MODALITY
//CREATE TABLE modality ( modId int not null auto_increment, name varchar(20) not null, description varchar(200) not null, comment varchar(400) not null ,primary key(modId) );

//TABLE USERMODALIY
//create table usermodality (prodId int not null auto_increment,name varchar(20) not null, description varchar(200) not null,
// comment varchar(400) not null ,primary key(prodId),modId int,
// FOREIGN KEY (modId) REFERENCES modality(modId))


//TABLE ROLE
//create table role (roleId int not null auto_increment,name varchar(40),description varchar(200))  

//ALTER TABLE modality CHANGE `discription` `description` varchar(200);
//drop table modality;
//create table role (r  oleId int not null auto_increment,name varchar(40),description varchar(200))

// create table user (userId int not null,userEmail varchar(200),userPassword varchar(200),createTime timestamp ,username varchar(200),
// roleId int,accessType varchar(200),validityStart date,validityEnd date,active int,access_level int,primary key(userId),
// FOREIGN KEY (roleId) REFERENCES role(roleId),FOREIGN KEY (access_level) REFERENCES access_level(access_level)); 
