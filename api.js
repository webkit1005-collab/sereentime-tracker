export default function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const pathname = url.pathname;
  
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
