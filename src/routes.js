const { Router } = require('express');

const ContactsController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactsController.index);

module.exports = router;
