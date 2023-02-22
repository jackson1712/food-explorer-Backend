exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.string("avatar_dish");
    table.text("description");
    table.decimal("price", 8, 2);
    table.text("ingredients");
    table.integer("category_id").references("id").inTable("category");
});


exports.down = knex => knex.schema.dropTable("dishes");