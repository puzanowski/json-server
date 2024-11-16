const express = require('express');
const authMiddleware = require('./auth-middleware');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(express.json()); // Esto asegura que req.body sea definido
server.use(middlewares);
server.use(authMiddleware);
server.use('/api', router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});