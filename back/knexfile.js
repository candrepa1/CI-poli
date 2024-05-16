require('dotenv').config()

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './db/seeds'
      }
    }
  };
  