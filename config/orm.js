const connection = require("../config/connection");
const orm = {
  selectAll: (tableName, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },

  insertOne: (tableName, burgers, cb) => {
    const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";

    connection.query(
      queryString,
      [tableName, burgers.name, burgers.devoured],
      (err, result) => {
        if (err) throw err;

        cb(result);
      }
    );
  },

  updateOne: (tableName, burgers, cb) => {
    const queryString = "UPDATE ?? SET burger_name=? WHERE id=?";

    connection.query(
      queryString,
      [tableName, burgers.burger_name, burgers.id],
      (err, result) => {
        if (err) throw err;

        cb(result);
      }
    );
  },
};
module.exports = orm;
