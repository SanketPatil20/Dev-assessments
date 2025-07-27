const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware/route
});

app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({ message: 'All fields are required: name, email, course' });
    }

    console.log('Received registration data:', req.body);
    res.send(`Registration successful for ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
