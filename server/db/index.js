var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Messages = db.define('Messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Messages.belongsTo(User);
User.hasMany(Messages);

User.sync();
Messages.sync();

module.exports = {User: User, Messages: Messages};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//https://www.npmjs.com/package/mysql
