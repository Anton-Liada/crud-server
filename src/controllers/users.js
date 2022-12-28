/* eslint-disable camelcase */
'use strict';

const { userServices } = require('../services/users');

const getAll = (req, res) => {
  const users = userServices.getAll();

  res.send(users);
};

const getById = (req, res) => {
  const { userId } = req.params;
  const foundUser = userServices.getById(userId);

  if (!foundUser) {
    res.sendStatus(404);

    return;
  }

  res.send(foundUser);
};

const create = (req, res) => {
  const {
    id,
    first_name,
    last_name,
    email,
    address,
    gender,
  } = req.body;

  const newUser = userServices.create(
    id,
    first_name,
    last_name,
    email,
    address,
    gender
  );

  res.statusCode = 201;
  res.send(newUser);
};

const remove = (req, res) => {
  const { userId } = req.params;
  const foundUser = userServices.getById(userId);

  if (!foundUser) {
    res.sendStatus(404);

    return;
  }

  userServices.remove(userId);
  res.sendStatus(204);
};

const update = (req, res) => {
  const { userId } = req.params;
  const foundUser = userServices.getById(userId);

  if (!foundUser) {
    res.sendStatus(404);

    return;
  }

  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    address,
  } = req.body;

  userServices.update({
    id,
    first_name,
    last_name,
    email,
    gender,
    address,
  });

  res.send(foundUser);
};

module.exports.userController = {
  getAll,
  getById,
  create,
  remove,
  update,
};
