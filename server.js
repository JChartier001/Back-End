const express = require('express')
const cors = require('cors');
const helmet = require("helmet")

const authRouter = require('./auth/auth-router')
const UserRouter = require('./users/users-router')

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())


server.use('/auth', authRouter, UserRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});


module.exports = server;
