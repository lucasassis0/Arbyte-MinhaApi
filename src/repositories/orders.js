const knex = require("../../database")
const Order = require("../models/Order")
const tableName = "orders"
const moment = require("moment")

const getAll = async () => {
    const orders = await knex(tableName)
    return orders.map((order) => new Order(order))
}

const getById = async (id) => {
    const [order] = await knex(tableName).where({ id: id })
    return new Order(order)
}

const create = async order => {
    const [id] = await knex(tableName).returning('id').insert(order)
    return id
}

const update = (id, order) => {
    order.updated_at = moment().utc().format()
    return knex(tableName).where({id: id}).update(order)
}

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