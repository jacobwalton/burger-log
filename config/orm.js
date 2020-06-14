var connection = require("../config/connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (val1, val2, cb) {
    var queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";

    connection.query(queryString, [val1, val2], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (devoured, id, cb) {
    var queryString = "UPDATE burgers SET devoured=? WHERE id=?";

    connection.query(queryString, [devoured, id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
