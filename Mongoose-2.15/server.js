const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student');

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

  try {
    const student = new Student({ name, email, course });
    await student.save();
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: 'Validation failed', errors });
    }
    if (err.code === 11000 && err.keyPattern.email) {
      return res.status(409).json({ message: 'Email must be unique' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
