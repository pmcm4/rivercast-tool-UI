const express = require('express');
const cors = require('cors');
const mysql = require('mysql'); // Replace with your database library

const app = express();
const port = 3001;

app.use(cors());

const dbConfig = {
  host: 'database-1.cccp1zhjxtzi.ap-southeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Nath1234',
  database: 'rivercast',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.get('/api/data/:table', (req, res) => {
  const { table } = req.params;
  const query = `SELECT * FROM ${table}`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/rcmae/:table', (req, res) => {
  const { table } = req.params;
  const query = `SELECT DateTime, MAE FROM ${table} order by DateTime DESC limit 5`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/bimae/:table', (req, res) => {
  const { table } = req.params;
  const query = `SELECT Datetime, MAE FROM ${table} order by Datetime DESC limit 5`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/totrcmae/:table', (req, res) => {
  const { table } = req.params;
  const query = `SELECT cnt, aMAE, tMAE FROM ${table} order by cnt DESC limit 1`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/totbimae/:table', (req, res) => {
  const { table } = req.params;
  const query = `SELECT cnt, aMAE, tMAE FROM ${table} order by cnt DESC limit 1`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
