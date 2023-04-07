const db = require('../../data/dbConfig');

module.exports = {
    addUser,
    findById,
    findByUsername,
}

function findByUsername(username) {
    return db('users').where('username', username).first();
}

function findById(id) {
    return db('users').where('id', id).first()
}

async function addUser(user) {
    const [id] = await db("users").insert(user)
    return findById(id)
}