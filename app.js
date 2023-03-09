import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const date = new Date();
  res.json({ date });
});

app.listen(3000, () => {
  console.log('Hello from SPSE!');
});
