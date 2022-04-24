const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

module.exports = {
    createToken(email, password, ip) {
      console.log('Token created');
      const token = jwt.sign({ email, password, ip }, 'criasbookTrybe', jwtConfig); //process.env.SECRET_WORD
      return token;
  },
};