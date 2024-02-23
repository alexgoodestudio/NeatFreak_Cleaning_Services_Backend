exports.up = function(knex) {
    return knex.schema.createTable("estimates", (table) => {
      table.increments("estimate_id").primary();
      table.string("name");
      table.string("email_address");
      table.string("phone_number");
      table.integer('numberOfBeds').notNullable();
      table.integer('numberOfBaths').notNullable();
      table.integer('squareFootage').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.hasTable('estimates').then(exists => {
      if (exists) {
        return knex.schema.dropTable('estimates');
      }
    });
  };