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
export default function handler(req, res) {
  const { pathname } = new URL(req.url, `https://${req.headers.host}`);
  
  if (req.method === 'GET' && pathname === '/api/log') {
    res.status(200).json({ message: '服务器运行正常', log: [] });
    return;
  }
  
  if (req.method === 'POST') {
    const app = pathname.split('/').pop();
    res.status(200).json({ ok: true, app, time: new Date().toISOString() });
    return;
  }
  
  res.status(404).json({ error: 'not found' });
}
app.get('/api/log', (req, res) => {
  res.json(log);
});

module.exports = app;
