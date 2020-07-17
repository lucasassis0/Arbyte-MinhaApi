const knex = require("../../database")
const tableName = "orders"

const getAll = () => knex(tableName)

const create = (order) => {
    return knex(tableName)
        .insert(order)
        .then(([inserted]) => inserted)
}

module.exports = {
    getAll,
    create
}