
exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
        tbl.increments();
        tbl.text("username", 30)
        .unique()
        .notNullable()
        tbl.text("password", 30).notNullable()
    })

    .createTable("types", tbl => {
        tbl.increments();
        tbl.string("type").notNullable().unique()
    })    

    .createTable("pokedex", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique()
        tbl.integer("type1").notNullable().references("types.id")
        tbl.integer("type2").references("types.id").unique()
        tbl.integer("userId").notNullable().references("users.id")
    })
  };

  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("pokedex")
    .dropTableIfExists("users")
    .dropTableIfExists("types")
  };
