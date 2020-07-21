const { Router } = require("express")
const router = new Router()
const controller = require("../controllers/orders")

const routeName = '/orders'

router.get(routeName, controller.getAll)

//Pega todos os dados de um pedidos
router.get(`${routeName}/:id`, controller.getById)

//Cria um novo pedido
router.post(routeName, controller.create)

//Edita os dados de um pedido
router.patch(`${routeName}/:id`, controller.update)

//Deleta os dados de um pedido
router.delete(`${routeName}/:id`, controller.del)

module.exports = router