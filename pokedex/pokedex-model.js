const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findFakemon,
  remove
};

function find() {
  return db('pokedex').select('id', 'name', 'type');
}

function findBy(filter) {
  return db('pokedex').where(filter);
}

async function add(pokemon) {
  const [id] = await db('pokedex').insert(pokemon);

  return findById(id);
}

function findFakemon(id) {
    if(!id) {
        return db("pokedex")
        .join("users", "pokemon.userId", "=", "users.id")
        .select("pokedex.id", "pokedex.name", "pokedex.type")
    }
}

function findById(id) {
  return db('pokedex')
    .where({ id })
    .first();
}

function remove(pokemon) {
    return db("pokedex")
        .where("id", id)
        .del(pokemon)
}