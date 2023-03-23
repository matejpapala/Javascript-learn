import express from 'express';
import axios from 'axios';

const app = express();

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html>');
  res.write('<html lang = "cs">');
  res.write('<head>');
  res.write('<meta charset = "UTF-8">');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>nesnasim SQL</h1>');
  res.write('<a href = "/stats">Statistika</a>');
  res.write('<br>');
  res.write('<a href = "/static/index.html">Ustav</a>');
  res.write('<br>');
  res.write('<a href = "myprofile">jo</a>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

app.get('/stats', (req, res) => {
  res.json({
    who: 'Matej',
    gpa: 1.73,
  });
});

app.get('/profile', async (req, res) => {
  const gh = await axios.get('https://api.github.com/users/matejpapala');
  res.json(gh.data);
});

app.get('/myprofile', async (req, res) => {
  const gh = await axios.get('https://api.github.com/users/matejpapala');
  const user = gh.data;
  const date = new Date();
  res.write('<!DOCTYPE html>');
  res.write('<html lang = "cs">');
  res.write('<head>');
  res.write('<meta charset = "UTF-8">');
  res.write('</head>');
  res.write('<body>');
  res.write(`<h1>${user.name}</h1>`);
  res.write('<br>');
  res.write(`<h1 style = "font-size: 22px">${user.blog}</h1>`);
  res.write('<br>');
  res.write(`<img id = "obrazek" src = "${user.avatar_url}">`);
  /*res.write(`<h1>jsem clenem githubu ${user.created_at - date}</h1>`);*/
  res.write('</body>');
  res.write('</html>');
  res.end();
});

app.listen(3000, () => {
  console.log('Hello from SPSE!');
});
