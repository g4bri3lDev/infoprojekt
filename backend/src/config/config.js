module.exports = {
    port: process.env.port || 8081,
    db: {
        database: process.env.DB_NAME || 'indoornav',
        user: process.env.DB_USER || 'indoornavDBUser',
        password: process.env.DB_PASSWORD || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './db.sqlite',
            operatorsAliases: false
    }
  }
}
