module.exports = {
  getIp(req) {
    const ipCliente = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    return ipCliente.split(':')[3];
  },
};