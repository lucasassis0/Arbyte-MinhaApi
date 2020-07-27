//Camada responsável pela interação com o banco de dados

const knex = require("../../database")
const moment = require("moment")
const tableName = "products"

/**
  SELECT * FROM products
 */
const getAll = () => knex(tableName)

/**
    SELECT * FROM products WHERE id=?
 */
const getById = (id) => {
    return knex(tableName)
        .where({ id: id })
        .then(([product]) => product)
}
/**
    INSERT INTO products (name, price) VALUES (?, ?)
 */
const create = (product) => {
    return knex(tableName)
        .returning('id')
        .insert(product)
        .then(([inserted]) => inserted)
}

const update = (id, product) => {
    product.updated_at = moment().utc().format()
    return knex(tableName).where({ id: id }).update(product)
}

/**
    DELETE FROM products WHERE id = ?
 */
const del = (id) => {
    return knex(tableName)
        .where({ id: id })
        .del()
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}