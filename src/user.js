class User {
  constructor(firstName, secondName, age) {
    if (!firstName || typeof firstName !== 'string') {
      throw new Error();
    }
    if (!secondName || typeof secondName !== 'string') {
      throw new Error();
    }
    if (typeof age !== 'number' || isNaN(age)) {
      throw new Error();
    }
    this._firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (!newFirstName || typeof newFirstName !== 'string') {
      throw new Error();
    }
    this._firstName = newFirstName;
  }

  get name() {
    return `${this._firstName} ${this.secondName}`;
  }

  celebrateBirthday() {
    this.age += 1;
  }

  introduce() {
    return `My name is ${this._firstName} ${this.secondName}, I'm ${this.age}`;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  let user = []
  for (let i = 0; i < data.length; i++) {
    user.push(new User (data[i].firstName, data[i].secondName, data[i].age));
  }
  //user.push(new User (data.firstName, data.secondName, data.age));


  return user;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  let user = []
  for (var i = 0; i < users.length; i++) {
    if (users[i].age === age) {
      user.push(users[i]);

    }

  }
  return user;
}

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
      users[i].celebrateBirthday();
    }
  }
  return users;
};
