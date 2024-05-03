const {db} = require("./database");


function createTodo(activityText, callback) {

  const insertQuery = `INSERT INTO todos (todo, created_at) VALUES (?, ?)`;

  db.run(insertQuery, [activityText, new Date().getTime()], callback);
}

function getAll(callback) {
  const getAllQuery = `SELECT * FROM todos`;
  db.all(getAllQuery, callback);
}

function getOne (id){
  const getQuery = `SELECT * FROM todos WHERE id= ?`;

  db.run(getQuery, [id]);
}

function deleteOne (id, callback) {
  const deleteQuery = `DELETE FROM todos WHERE id= ?`;

  db.run(deleteQuery, [id], callback);
}

module.exports = { createTodo, getAll, deleteOne, getOne };
