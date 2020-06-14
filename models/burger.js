var orm = require("../config/orm.js");

var burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: (val1, val2, cb) => {
    orm.insertOne(val1, val2, (res) => {
      cb(res);
    });
  },
  updateOne: (devoured, id, cb) => {
    orm.updateOne(devoured, id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
