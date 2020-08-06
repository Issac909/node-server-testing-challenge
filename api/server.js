const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const sessionsConfig = require('../config/sessionsConfig');

const userRouter = require("../users/user-router");
const pokedexRouter = require("../pokedex/pokedex-router")
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionsConfig));

server.use("/api/users", userRouter);
server.use("/api/pokedex", pokedexRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})

module.exports = server;