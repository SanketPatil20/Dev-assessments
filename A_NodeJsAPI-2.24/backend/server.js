const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./Models/Student');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB: studentDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});

// Routes

// GET /students - Returns a list of all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    console.log(`📋 Fetched ${students.length} students`);
    res.json(students);
  } catch (err) {
    console.error('❌ Error fetching students:', err);
    res.status(500).json({ message: 'Failed to retrieve students' });
  }
});

// GET /student/:id - Fetch student by ID
app.get('/student/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error('❌ Error finding student:', err);
    res.status(500).json({ message: 'Invalid student ID or server error' });
  }
});

// POST /add-student - Add a new student
app.post('/add-student', async (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const student = new Student({ name, email, course });
    await student.save();
    console.log(`✅ Student added: ${name}`);
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (err) {
    console.error('❌ Error adding student:', err);
    res.status(500).json({ message: 'Failed to add student' });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📚 API Endpoints:`);
  console.log(`   GET  /students - Get all students`);
  console.log(`   GET  /student/:id - Get student by ID`);
  console.log(`   POST /add-student - Add new student`);
  console.log(`   GET  /health - Health check`);
});
