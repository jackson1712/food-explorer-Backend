exports.up = knex => knex.schema.hasTable.createTable("users", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.text("email");
    table.text("password");
    table.boolean("isAdmin").notNullable().default(false);

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");