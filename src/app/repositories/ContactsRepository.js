const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Caue Furui',
    email: 'furui.dev@gmail.com',
    phone: '99999-9999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
