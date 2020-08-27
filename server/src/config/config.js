module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tab_tracker',
    user: process.env.DB_USER || 'tab_tracker',
    password: process.env.DB_PASSWORD || 'tab_tracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'locahost',
      storage: './tab_tracker.sqlite'
    }
  }
}
