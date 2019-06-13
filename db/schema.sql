CREATE DATABASE dummy_db;
USE dummy_db;

CREATE TABLE markers {
    id INT auto_increment NOT NULL,
    name varchar (60) NOT NULL,
    park_name varchar (60) NOT NULL,

    address varchar (80) NOT NULL,
    park_address varchar (80) NOT NULL,


    lat FLOAT (10,6) NOT NULL,
    lng FLOAT (10,6) NOT NULL,
    park_type varchar (30) NOT NULL
 } PRIMARY KEY (id)