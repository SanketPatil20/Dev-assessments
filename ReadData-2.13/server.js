const express = require('express');
const mongoose = require('mongoose');
const Student = require('./Models/Student');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB: studentDB');
})
.catch((err) => {
  console.error('MongoDB connection failed:', err.message);
});

// POST /add-student
app.post('/add-student', async (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const student = new Student({ name, email, course });
    await student.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (err) {
    console.error('Error adding student:', err);
    res.status(500).json({ message: 'Failed to add student' });
  }
});

// GET /students — fetch all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ message: 'Failed to retrieve students' });
  }
});

// GET /student/:id — fetch student by _id
app.get('/student/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error('Error finding student:', err);
    res.status(500).json({ message: 'Invalid student ID or server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
