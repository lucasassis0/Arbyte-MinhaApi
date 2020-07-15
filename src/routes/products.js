const { Router } = require("express")
const router = new Router()
const knex = require("../../database")
const { insert, table } = require("../../database")
const controller = require("../controllers/products")

const routeName = '/products'
const tableName = 'products'

router.get(routeName, controller.getAll)

router.get(`${routeName}/:id`, controller.getById)

router.post(routeName, controller.create)

router.patch(`${routeName}/:id`, controller.update)

router.delete(`${routeName}/:id`, controller.del)

module.exports = router