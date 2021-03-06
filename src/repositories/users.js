const knex = require("../../database")
const User = require("../models/User")
const tableName = "users"

const create = async user => {
    const [id] = await knex(tableName).returning('id').insert(user)
    return id
}

const getOne= async (filter) => {
    const [user] = await knex(tableName).where(filter)
    return new User(user)
}

module.exports = {
    create,
    getOne
}