const { Router } = require('express');
const router = Router();

const controller = require('./user_controller');

router.get('/utenti', controller.getAllUsers);
router.post('/utenti', controller.insertUser);
router.post('/register', controller.registerUser);

module.exports = router;
