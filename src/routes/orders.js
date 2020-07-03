const { Router } = require("express")
const router = new Router()

const routeName = '/orders'

//Lista todos os pedidos
router.get(routeName, (req, res) => {
    res.json([{ message: 'Vai retornar todos os pedidos' }])
})

//Pega todos os dados de um pedidos
router.get(`${routeName}/:id`, (req, res) => {
    res.json([{
        message: 'Vai retornar os dados de um pedido dado um id',
        id: req.params.id,
    }])
})

//Cria um pedido
router.post(routeName, (req, res) => {
    res.status(201).json({
        message: 'Vai criar um pedido'
    })
})

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