  const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

exports.seed = async (knex) => {

    await knex('users').truncate()

    await knex('users').insert([
        { username: "IronMan", email: "Tony@stark.com", password: `${await hash('testing1')}`}
     ])
}