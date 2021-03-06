const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  pool: {
    afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  seeds: {
    directory: "./database/seeds",
  },
}
module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./database/dev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3",
    },
  },
}