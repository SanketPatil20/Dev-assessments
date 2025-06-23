CREATE DATABASE team_db;

USE team_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    course VARCHAR(255)
);
