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
    res.status(500).json({ message: 'Failed to add student' });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve students' });
  }
});

app.get('/student/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: 'Invalid student ID' });
  }
});

app.put('/student/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, course },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (err) {
    res.status(400).json({ message: 'Invalid student ID or data format' });
  }
});

app.delete('/student/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully', student: deletedStudent });
  } catch (err) {
    res.status(400).json({ message: 'Invalid student ID' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
