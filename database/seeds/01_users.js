  const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

exports.seed = async (knex) => {

    await knex('users').truncate()

    await knex('users').insert([
        { firstname: "Harry", lastName:"Potter", email: "Harry@potter.com", password: `${await hash('testing1')}`},
        { firstname: "Sirius", lastName:"Black", email: "Black@potter.com", password: `${await hash('testing1')}`}
     ])
}