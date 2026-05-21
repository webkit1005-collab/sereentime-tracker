const express = require('express');
const app = express();
app.use(express.json());

let log = [];

app.post('/api/toggle/:appName', (req, res) => {
  const entry = {
    app: req.params.appName,
    time: new Date().toISOString()
  };
  log.push(entry);
  res.json({ ok: true, entry });
});

app.get('/api/log', (req, res) => {
  res.json({ log });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
