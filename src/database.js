const sqlite3 = require("sqlite3").verbose();
const dbName = "todo_db.db";

    db = new sqlite3.Database(dbName, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.info("");

        db.run(
          "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT NOT NULL, created_at INTEGER)",
          (err) =>
            err
              ? console.error("Could not create table: " + err)
              : console.info("Table created")
        );
      }
    });

module.exports = { db };
