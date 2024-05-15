exports.up = function(knex) {
    return knex.schema.createTable('todos', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.boolean('isDone').notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('todos');
  };
