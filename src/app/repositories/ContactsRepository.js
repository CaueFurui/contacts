const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Caue Furui',
    email: 'furui.dev@gmail.com',
    phone: '99999-9999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Estela',
    email: 'estela@email.com',
    phone: '1234-5678',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
