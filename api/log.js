export default function handler(req, res) {
  res.status(200).json({ message: '服务器运行正常', log: [] });
}
