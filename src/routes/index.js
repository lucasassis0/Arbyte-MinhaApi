const {Router} = require("express")
const orders = require("./orders")
const products = require("./products")

const router = Router()

router.use(orders)
router.use(products)

module.exports = router