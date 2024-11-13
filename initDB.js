const db = require('./database');

//create
const createItem = (name, description, callback) => {
  const sql = `INSERT INTO ITEMS (name,description) VALUES(?,?)`;
  db.run(sql, [name, description], function (err) {
    callback(err, { id: this.lastID });
  });
};

const readItems = (callback) => {
  const sql = 'SELECT * FROM items';
  db.all(sql, [], callback);
};

const updateItem = (id, name, description, callback) => {
  const sql = 'UPDATE items SET name=?,description =?,where id=?';
  db.run(sql, [name, description, id], callback);
};

const deleteItem = (id, callback) => {
  const sql = `DELETE items WHERE id= ?`;
  db.run(sql, id, callback);
};

module.export = { createItem, readItem, updateItem, deleteItem };