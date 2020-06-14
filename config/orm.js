const connection = require("./connection");
const tableName = "burgers";

const orm = {
  selectAll: function (tableName, callback) {
    var s = "SELECT * FROM " + tableName;
    connection.query(s, function (err, result) {
      callback(result);
    });
  },

  insertOne: function (tableName, burger, callback) {
    const queryString =
      "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    burger.complete = burger.complete || 0;
    connection.query(queryString, [burger.text, burger.devoured], function (
      err,
      result
    ) {
      callback(result);
    });
  },

  updateOne: function (tableName, burger, callback) {
    const queryString = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(queryString, [burger.name, burger.id], function (
      err,
      result
    ) {
      callback(result);
    });
  },
};

module.exports = orm;

// const orm = {
//   selectAll: function (callback) {
//     const queryString = "SELECT * FROM " + tableName;

//     connection.query(queryString, (err, result) => {
//       if (err) throw err;

//       callback(result);
//     });
//   },

//   insertOne: function (burger, callback) {
//     const queryString =
//       "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";

//     connection.query(
//       queryString,
//       [burger.name, burger.devoured],
//       (err, result) => {
//         if (err) throw err;

//         callback(result);
//       }
//     );
//   },

//   updateOne: function (burger, callback) {
//     const queryString = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

//     connection.query(
//       queryString,
//       [burger.burger_name, burger.id],
//       (err, result) => {
//         if (err) throw err;

//         callback(result);
//       }
//     );
//   },
// };
// module.exports = orm;
