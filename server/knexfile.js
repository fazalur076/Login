// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://exxxxxxxYOUR_DB_URLxxxxxxxxxxxxxxxxx'
  },
  test: {
    client: 'pg',
    connection: 'postgres://exxxxxxxYOUR_DB_URLxxxxxxxxxxxxxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};