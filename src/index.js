const express = require("express");
const { createTodo, getAll, deleteOne, getOne } = require("./crud");
const app = express();
const port = 13327;

app.use(express.json());

app.delete("/:id", (req, res) => {
  const { id } = req.params;
    deleteOne(id, (err) => {
      if (err) {
        return res.status(404).send(err.message);
      }
      console.info('Deleted activity with id: ' + id)
      return res.status(204).send('Deleted activity with id: ' +id);
    });
});

app.get("/all", (req, res) => {
  getAll((err, data) => {
    if (err) {
      return res.status(404).send(err.message);
    }
    return res.status(200).send(data);
  });
});

app.post("/todo", (req, res) => {
  const { activity } = req.body;
  createTodo(activity, (err) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res
      .status(201)
      .send({ success: `Created new To Do, activity: ${activity}` });
  });
});

app.get("/health", (req, res) => res.send("Running OK"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
