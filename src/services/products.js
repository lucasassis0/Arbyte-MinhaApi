const repository = require("../repositories/products")

const getAll = () => repository.getAll()

const getById = async (id) => {
    const product = await repository.getById(id)
    if (!product) {
        throw {status: 404, message: "Not found"}
    }
    return product
}

const create = async (product) => {
    const id = await repository.create(product)
    const created = await repository.getById(id)
    return created
}

const update = async (id, data) => {
    data.id = undefined
    const product = await repository.getById(id)
    if (!product) {
        throw { status: 404, message: "Not found" }
    }
    const merged = Object.assign({}, product, data)
    await repository.update(id, merged)
    const updated = await repository.update(id, data)
    return updated
}

const del = (id) => repository.del(id)

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}