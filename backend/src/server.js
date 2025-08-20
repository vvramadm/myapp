const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL RDS');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ time: results[0].now });
  });
});

app.get('/ping', (req, res) => res.json({ message: 'pong' }));

app.listen(port, () => console.log(`Backend listening on port ${port}`));
