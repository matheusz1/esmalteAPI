const { Router } = require('express')
const ControllerMaquiagem = require('../src/controller/ControllerMaquiagem')

const router = Router()

router.get('/maquiagem', ControllerMaquiagem.buscar)

module.exports = router