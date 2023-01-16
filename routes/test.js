const {Router} = require('express')
const router =  Router();
const { test } = require('../controllers/test')
const { testServices } = require('../controllers/testServices')

router.get('/', test)

router.post('/testServices', testServices)


module.exports = router