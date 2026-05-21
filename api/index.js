const express = require('express');
const app = express();
app.use(express.json());

let log = [];

app.post('/api/toggle/:app', (req, res) => {
  const entry = {
    app: req.params.app,
    time: new Date().toISOString()
  };
  log.push(entry);
  console.log(entry);
  res.json({ ok: true, entry });
});

app.get('/api/log', (req, res) => {
  res.json(log);
});

module.exports = app;
