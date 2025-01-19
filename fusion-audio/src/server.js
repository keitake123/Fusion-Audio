const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fgmpsswrd119!',
  database: 'contact_form',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Handle Form Submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const query = 'INSERT INTO contacts (first_name, last_name, email, message) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving to database');
    } else {
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));