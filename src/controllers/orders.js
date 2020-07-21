const service = require("../services/orders")
const Order = require("../models/Order")
const handleError = require("./handleError")

const getAll = async (req, res) => {
    try {
        const orders = await service.getAll()
        res.json(orders)
    } catch (error) {
        handleError(res, error)
    }
}

const create = async (req, res) => {
    try {
        if (!req.body.product_id || !req.body.quantity) {
            throw { status: 400, message: "Invalid data" }
        }
        const created = await service.create(req.body)
        res.status(201).json(created)
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = {
    getAll,
    create
}