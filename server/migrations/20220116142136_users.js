
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('name');
        table.string('email');
        table.varchar('password');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
