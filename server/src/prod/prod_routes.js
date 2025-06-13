const { Router } = require('express');
const router = Router();

const controller = require('./prod_controller');

router.get('/prodotti', controller.getAllProds);

module.exports = router;