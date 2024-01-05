exports.up = function(knex) {
  return knex.schema.createTable("estimate", (table) => {
    table.increments("estimate_id").primary();
    table.string("name");
    table.string("email_address");
    table.timestamps(true, true);
    table.string("service_type").nullable(); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("estimate");
};