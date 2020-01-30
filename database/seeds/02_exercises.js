exports.seed = async (knex) => {
    await knex('exercises').truncate()

    await knex('exercises').insert([
       { exercise: "Push ups" }
    ])
}