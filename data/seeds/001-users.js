const { BCRYPT_ROUNDS } = require('../../api/secrets');
const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  await knex('users').truncate()
  await knex('users').insert([
    { username: 'ross', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
    { username: 'chandler', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
    { username: 'joey', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
    { username: 'monica', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
    { username: 'rachel', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
    { username: 'pheobe', password: bcrypt.hashSync('1234', BCRYPT_ROUNDS) },
  ])};