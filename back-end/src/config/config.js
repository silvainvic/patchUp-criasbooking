// require('dotenv').config();


// module.exports = {
//   development: {
//     username: 'root',
//     password: 'root',
//     database: 'criasbook',
//     host: 'localhost',
//     dialect: 'mysql',
//   },
// }

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
}