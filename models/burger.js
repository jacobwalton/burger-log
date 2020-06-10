var orm = require("../config/orm");

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },
  insertOne: function (burgers, callback) {
    orm.insertOne("burgers", burgers, function (res) {
      callback(res);
    });
  },
  updateOne: function (burgers, callback) {
    orm.updateOne("burgers", burgers, function (res) {
      callback(res);
    });
  },
};
module.exports = burger;
