module.exports.error = (error, _req, res, _next) => {
  const { code, message } = error;

  if (code) return res.status(code).json({ message });

  return res.status(500).json({ message });
}