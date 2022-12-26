/* eslint-disable camelcase */
'use strict';

const express = require('express');
const cors = require('cors');
const { userController } = require('./controllers/users');

const app = express();
const port = process.env.Port || 5000;

app.use(cors());

app.get('/users', userController.getAll);

app.get('/users/:userId', userController.getById);

app.post('/users', express.json(), userController.create);

app.delete('/users/:userId', userController.remove);

app.put('/users/:userId', express.json(), userController.update);

app.listen(port);
