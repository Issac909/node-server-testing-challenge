const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexStore = require("connect-session-knex")(session); 
const knex = require("../database/dbConfig")


// const userRouter = require("./users/user-router");
// const pokedexRouter = require("./articles/pokedex-router")
const server = express();

const sessionsConfig = {
    name: "AshfromPalletTown", 
    secret: "I wanna be the very best",

    cookie: {
        maxAge: 1000 * 60 * 30,
        secure: process.env.DB_ENV === "production" ? true : false, // true in production
        httpOnly: true
    },
    store: new KnexStore({
        knex: knex,
        tablename: "sessions",
        createtable: true,
        sidfieldname: "sid",
        clearInterval: 1000 * 60 * 15,
    }),
    resave: false,
    saveUninitialized: true, 
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionsConfig));

// server.use("/api/users", userRouter);
// server.use("/api/pokedex", pokedexRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})

module.exports = server;