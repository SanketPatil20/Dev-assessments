const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /students 
app.get('/students', (req, res) => {
  const students = [
    { name: 'Alice', age: 20, course: 'Math' },
    { name: 'Bob', age: 22, course: 'Physics' },
    { name: 'Charlie', age: 19, course: 'Computer Science' }
  ];
  res.json(students);
});

// GET /add-student 
app.get('/add-student', (req, res) => {
  res.send('This route expects a POST request with student data.');
});

// POST /add-student 
app.post('/add-student', (req, res) => {
  const student = req.body;
  console.log('New student received:', student);
  res.send('Student data received');
});

// GET /form 
app.get('/form', (req, res) => {
  res.send(`
    <h2>Add Student</h2>
    <form action="/add-student" method="POST">
      <input name="name" placeholder="Name" /><br/>
      <input name="age" placeholder="Age" type="number" /><br/>
      <input name="course" placeholder="Course" /><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Start 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
