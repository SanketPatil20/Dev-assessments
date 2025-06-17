CREATE DATABASE web_db;

USE web_db;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    employee_email VARCHAR(100) UNIQUE,
    employee_salary INT,
    department VARCHAR(50),
    date_of_joining DATE,
    phone_number VARCHAR(15)
);

CREATE TABLE projects (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(100),
    start_date DATE,
    end_date DATE,
    project_budget INT,
    project_manager_id INT,
    amount_spent INT,
    FOREIGN KEY (project_manager_id) REFERENCES employees(employee_id)
);

INSERT INTO employees VALUES
(1, 'Alice Johnson', 'alice@example.com', 70000, 'Development', '2021-05-10', '1234567890'),
(2, 'Bob Smith', 'bob@example.com', 60000, 'Design', '2022-01-15', '1234567891'),
(3, 'Charlie Lee', 'charlie@example.com', 80000, 'Development', '2023-03-20', '1234567892'),
(4, 'Diana King', 'diana@example.com', 75000, 'QA', '2020-09-25', '1234567893');

INSERT INTO projects VALUES
(101, 'Website Redesign', '2023-01-01', '2023-06-30', 50000, 1, 45000),
(102, 'Mobile App', '2023-02-15', '2023-08-15', 60000, 3, 55000),
(103, 'Backend API', '2022-11-01', '2023-05-01', 40000, 1, 37000),
(104, 'QA Automation', '2023-04-01', '2023-10-01', 30000, 4, 28000);

SELECT * FROM employees;

SELECT * FROM projects;

UPDATE employees
SET employee_salary = 85000
WHERE employee_id = 2;

DELETE FROM projects
WHERE project_id = 103;

SELECT * FROM employees
WHERE employee_salary > 70000;

-- Using ID
SELECT * FROM projects
WHERE project_manager_id = 1;

-- Using JOIN with employee name
SELECT p.*
FROM projects p
JOIN employees e ON p.project_manager_id = e.employee_id
WHERE e.employee_name = 'Alice Johnson';

SELECT * FROM employees
WHERE date_of_joining > '2022-01-01';

SELECT SUM(project_budget) AS total_budget
FROM projects;

SELECT SUM(amount_spent) AS total_spent
FROM projects;

SELECT e.employee_name, p.project_name
FROM employees e
LEFT JOIN projects p ON e.employee_id = p.project_manager_id;
