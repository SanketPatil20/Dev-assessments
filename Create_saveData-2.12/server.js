const express = require('express');
const mongoose = require('mongoose');
const Student = require('./Models/Student');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/internshipDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB: internshipDB');
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err.message);
    });

app.post('/add-student', async (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({ message: 'All fields are required: name, email, course' });
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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
