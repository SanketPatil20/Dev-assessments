const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, 'data.txt');

app.post('/write', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  fs.writeFile(filePath, message, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Failed to write to file' });
    }

    res.json({ message: 'Message written to data.txt' });
  });
});

app.get('/read', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).json({ error: 'data.txt not found' });
      }
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to read file' });
    }

    res.json({ message: data });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
