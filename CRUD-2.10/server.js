const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: "Alice", course: "Node.js" },
  { id: 2, name: "Bob", course: "React" }
];

// GET /students → Return all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET /students/:id → Return student by ID
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// POST /students → Add a new student
app.post('/students', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id → Update student details
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course } = req.body;
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;

  res.json({ message: "Student updated", student });
});

// DELETE /students/:id → Remove student by ID
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const removed = students.splice(index, 1);
  res.json({ message: "Student deleted", student: removed[0] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
