const { Router } = require('express');

const ContactsController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactsController.index);
router.get('/contacts/:id', ContactsController.show);
router.delete('/contacts/:id', ContactsController.delete);
router.post('/contacts', ContactsController.store);
router.put('/contacts/:id', ContactsController.update);

module.exports = router;
