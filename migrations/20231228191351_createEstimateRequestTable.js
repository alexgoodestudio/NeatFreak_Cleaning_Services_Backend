exports.up = function(knex) {
  return knex.schema.createTable("estimate", (table) => {
    table.increments("estimate_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email_address");
    table.string("phone_number");
    table.string("message");
    table.timestamps(true, true);
    table.string("service_type").nullable(); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("estimate");
};