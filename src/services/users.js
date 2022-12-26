/* eslint-disable camelcase */
'use strict';

let users = [
  {
    id: 5,
    first_name: 'Derward11',
    last_name: 'Muffin',
    email: 'dmuffin4@free.fr',
    gender: 'male',
    address: '7722 Texas Pass',
  },
  {
    id: 6,
    first_name: 'Randolf',
    last_name: 'Gosnold',
    email: 'rgosnold5@goo.gl',
    gender: 'Male',
    address: '76528 Schiller Park',
  },
  {
    id: 10,
    first_name: 'Milly',
    last_name: 'Gauler',
    email: 'mgauler9@netvibes.com',
    gender: 'Female',
    address: '7538 Caliangt Plaza',
  },
];

function getAll() {
  return users;
}

function getById(id) {
  const foundUser = users.find(user => user.id === Number(id));

  return foundUser || null;
}

function create(id, first_name, last_name, email, address, gender) {
  const newUser = {
    id,
    first_name,
    last_name,
    email,
    gender,
    address,
  };

  users.push(newUser);

  return newUser;
}

function remove(id) {
  users = users.filter(user => user.id !== Number(id));
}

function update({ id, first_name, last_name, email, address, gender }) {
  const user = getById(id);

  Object.assign(user, {
    first_name,
    last_name,
    email,
    address,
    gender,
  });

  return user;
}

module.exports.userServices = {
  getAll,
  getById,
  create,
  remove,
  update,
};
