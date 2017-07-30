var db = require('../db');

// console.log('this is db:', db);
// console.log('this is db message:', db.Messages);
module.exports = {
  messages: {
    get: function(req, res) {
      db.Messages.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          db.Messages.create({
            UserId: user.get('id'),
            text: req.body.text,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function(req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};
