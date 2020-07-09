const { Router } = require("express")
const router = new Router()

const routeName = '/products'

//Lista todos os produtos
router.get(routeName, (req, res) => {
    res.json([{ message: 'Vai retornar todos os produtos' }])
})

//Pega todos os dados de um produto
router.get(`${routeName}/:id`, (req, res) => {
    res.json([{
        message: 'Vai retornar os dados de um produto dado um id',
        id: req.params.id,
    }])
})

//Insere um produto
router.post(routeName, (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Insere um produto',
        insertedProduct: product
    })
})

//Edita os dados de um produto
router.patch(`${routeName}/:id`, (req, res) => {
    res.json([{ 
        message: 'Atualiza produto',
        id: req.params.id,
    }])
})

//Deleta os dados de um produto
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end())

module.exports = router