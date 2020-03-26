const express = require("express");
const router = express.Router();
const Pokedex = require("./pokedex-model");
const restricted = require("../config/restricted");

router.get('/', (req, res) => {

    Pokedex.find()
    .then(pokemon => {
      res.status(200).json(pokemon)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Pokedex' });
    });
  });

router.get("/types", restricted, (req, res) => {
  Pokedex.findBy()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed request" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Pokedex.findById(id)
    .then(pokemon => {
      if (pokemon) {
        res.json(pokemon);
      } else {
        res
          .status(404)
          .json({ message: "Could not find pokemon with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Pokedex" });
    });
});


router.post("/", restricted, (req, res) => {
  const pokemonData = req.body;

  Pokedex.add(pokemonData)
    .then(pokemon => {
      res.status(201).json(pokemon);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new pokemon" });
    });
});


router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Pokedex.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find Pokemon with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete Pokemon" });
    });
});

module.exports = router;