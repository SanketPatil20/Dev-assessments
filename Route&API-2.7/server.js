// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded array of students
const students = [
  { id: 1, name: 'Alice', course: 'Mathematics' },
  { id: 2, name: 'Bob', course: 'Physics' },
  { id: 3, name: 'Charlie', course: 'Computer Science' }
];

// Dynamic GET route to fetch student by ID
app.get('/student/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
