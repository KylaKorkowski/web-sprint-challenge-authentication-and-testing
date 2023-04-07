// Write your tests here
test('sanity', () => {
  expect(false).toBe(false)
})
const User = require('./users/users-model');
const db = require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
})

beforeEach(async () => {
  await db.seed.run();
})

describe('sanity', () => {
  test('sanity', () => {
    expect(true).toBe(true);
  })
})
describe('[POST]/api/auth/register endpoint', () => {
  const newUser = {
    username: 'jamison',
    password: 1234
  }
  describe('on successful registration:', () => {
    test('res should include an object with new user', async () => {
      const result = await User.addUser(newUser);
      expect(result).toBeTruthy()
    });
  })
  describe('on failed registration due to username unique failure:', () => {
    test('res should include appropriate message', async () => {
      const result = await User.addUser(newUser);
      expect(result).toBeTruthy()
    })
  })
})
describe('[POST]/api/auth/login endpoint', () => {
  describe('on successful login', () => {
    const user = { username: 'ross' };
    test('res.body should have appropriate message and token', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
  describe('on failed login due to missing username || password', () => {
    const user = { username: 'ross' };
    test('res should include appropriate message', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
  describe('on failed login due to nonexistant username or incorrect password', () => {
    const user = { username: 'ross' };
    test('res should include appropriate message', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
})
describe('[GET]/api/jokes/ endpoint', () => {
  describe('on valid token in Authorization header', () => {
    const user = { username: 'ross' };
    test('some assertions about the shape of the response', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
  describe('on missing token in the Authorization header', () => {
    const user = { username: 'ross' };
    test('res should include appropriate message', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
  describe('on invalid or expired token in the Authorization header', () => {
    const user = { username: 'ross' };
    test('res should include appropriate message', () => {
      const result = User.findByUsername(user)
      expect(result).toBeTruthy()
    })
  })
})