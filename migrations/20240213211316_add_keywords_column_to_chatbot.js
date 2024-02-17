exports.up = function(knex) {
    return knex.schema.table('chatbot', function(table) {
        table.text('keywords').nullable(); // Adding a new column for keywords
    });
};

exports.down = function(knex) {
    return knex.schema.table('chatbot', function(table) {
        table.dropColumn('keywords'); // Rolling back the changes
    });
};
