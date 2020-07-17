const repository = require("../repositories/orders")

const getAll = () => repository.getAll()

const create = async (order) => {
    const id = await repository.create(order)
    const created = await repository.getAll(id)
    return created
}

module.exports = {
    getAll,
    create
}