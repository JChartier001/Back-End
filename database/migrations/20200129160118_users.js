
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('username', 100).notNullable().unique()
      table.string('email').notNullable()
      table.string('password', 100).notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
