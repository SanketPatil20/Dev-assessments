CREATE DATABASE student_db;

USE student_db;

CREATE TABLE student_marks (
  entry_id     INT            AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100)   NOT NULL,
  subject      VARCHAR(100)   NOT NULL,
  marks        INT            NOT NULL CHECK (marks BETWEEN 0 AND 100),
  entry_date   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO student_marks (student_name, subject, marks) VALUES ('Sanket Patil', 'Mathematics', 85);

SELECT * FROM student_marks;