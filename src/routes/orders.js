const { Router } = require("express")
const router = new Router()
const controller = require("../controllers/orders")

const routeName = '/orders'

router.get(routeName, controller.getAll)

//Pega todos os dados de um pedidos
router.get(`${routeName}/:id`, (req, res) => {
    res.json([{
        message: 'Vai retornar os dados de um pedido dado um id',
        id: req.params.id,
    }])
})

router.post(routeName, controller.create)

//Edita os dados de um pedido
router.patch(`${routeName}/:id`, (req, res) => {
    res.json([{
        message: 'Atualiza pedido',
        id: req.params.id,
    }])
})

//Deleta os dados de um pedido
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end())

module.exports = router