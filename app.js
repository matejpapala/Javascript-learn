import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html>');
  res.write('<html lang = "cs">');
  res.write('<head>');
  res.write('<meta charset = "UTF-8">');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>nesnasim SQL</h1>');
  res.write('<a href = "/stats">Statistika</a>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

app.get('/stats', (req, res) => {
  res.json({
    who: 'Matej',
    gpa: 4.21,
  });
});

app.listen(3000, () => {
  console.log('Hello from SPSE!');
});
