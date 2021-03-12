const bcrypt = require('bcrypt');
const admin = {
  id: Math.floor(Math.random()*100),
  username: 'admin',
  password: bcrypt.hashSync('123456', 10)
}

function User({id, username, password}) {
  this.id = id;
  this.username = username;
  this.password = password;
  return this;
}

User.findOne = function({username}) {
  if (username !== 'admin') {
    return Promise.resolve(null);
  }
  const user = new User(admin);
  console.log(user);

  return Promise.resolve(user);
}

User.findByPk = function(id) {
  // if (admin.id === id) {
  //   const user = new User(admin);
  //   return Promise.resolve(user);
  // }
  // return Promise.resolve(null)

  if (admin.id !== id) {
    return Promise.resolve(null);
  }
  const user = new User(admin);

  return Promise.resolve(user)
}

User.prototype.verifyPassword = function(password) {
  // console.log(this);
  console.log(password);
  return bcrypt.compareSync(password, this.password);
}

module.exports = User;
