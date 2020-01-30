
exports.up = async function(knex) {
  await knex.schema.createTable('exercises', (table) => {
    table.increments('id')
    table.string('exercise', 128).notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('exercises')
};
