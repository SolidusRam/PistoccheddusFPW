const {Router} = require('express');
const controller = require('./session_controller');

const router = Router();
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.get('/session', controller.getCurrentSession);
router.post('/change-password', controller.changePassword);

module.exports = router;