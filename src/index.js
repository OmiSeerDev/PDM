const express = require("express");
const { createTodo, getAll } = require("./crud");
const app = express()
const port = 13327

app.use(express.json());

app.get("/todos", (req, res) => {
  getAll((err, rows) => {
    if (err) {
     return res.status(500).send(err.message);
    }
    return res.status(200).send(rows);
  });
});

app.post("/todo", (req, res) => {
  const {activity} = req.body;
  createTodo(activity, (err) => {
    if (err) {
    return res.status(400).send(err.message);
    }
    return res.status(201).send({success: `Created new To Do, activity: ${activity}`})
  });
});


app.get("/health", (req, res) => res.send("Running OK"));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
