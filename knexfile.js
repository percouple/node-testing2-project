const common = {
    client: 'sqlite3',
}

module.exports = {

development: {
    client: 'sqlite3', // Database client (e.g., postgresql, mysql, sqlite3)
    connection: {
      database: 'your_dev_database', // Database name
      user: 'your_username', // Database username
      password: 'your_password', // Database password
      host: 'localhost', // Database host
      port: '5432', // Database port
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations', // Directory containing migration files
    },
    seeds: {
      directory: './data/seeds', // Directory containing seed files
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.db', // SQLite filename for testing
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true, // Needed for SQLite
  }
}