var knex = require('../db/knex');

module.exports = {
  create: function(pirate) {
    return knex.raw(`INSERT into pirates values (DEFAULT, '${pirate.name}', '${pirate.drink}', '${pirate.accessory}')`);
  },
  all: function() {
    return knex.raw(`SELECT * from pirates`);
  },
  find: function(id) {
    return knex.raw(`SELECT * from pirates WHERE id = ${id}`);
  },
  updateOne: function(info, id) {
    return knex.raw(`UPDATE pirates SET name = '${info.name}', drink = '${info.drink}', accessory = '${info.accessory}'
      WHERE id = ${id}`);
  },
  destroy: function(id) {
    return knex.raw(`DELETE from pirates WHERE id = ${id}`);
  }
}
