const session = require("express-session");
const KnexStore = require("connect-session-knex")(session); 
const knex = require("../database/dbConfig")

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

module.exports = sessionsConfig;