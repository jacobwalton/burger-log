const orm = require("../config/orm.js");

const burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (res) => {
      callback(res);
    });
  },
  insertOne: (burgers, callback) => {
    orm.insertOne("burgers", burgers, (res) => {
      callback(res);
    });
  },
  updateOne: (burgers, callback) => {
    orm.updateOne("burgers", burgers, (res) => {
      callback(res);
    });
  },
};
module.exports = burger;
