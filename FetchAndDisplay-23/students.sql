CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  course VARCHAR(100)
);

INSERT INTO students (name, email, course) VALUES
('Allen', 'allene@gmail.com', 'Math'),
('Sunil', 'sunil@gmail.com', 'Science');
