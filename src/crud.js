const {db} = require("./database");


function createTodo(activityText, callback) {

  const insertQuery = `INSERT INTO todos (todo, created_at) VALUES (?, ?)`;

  db.run(insertQuery, [activityText, new Date().getTime()], callback);
}

function getAll(callback) {
  const getAllQuery = `SELECT * FROM todos`;
  db.all(getAllQuery, callback);
}

module.exports = { createTodo, getAll };
