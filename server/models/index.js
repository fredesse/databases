// var db = require('../db');
// var Sequelize = require('sequelize');


// // Messages
// //   .create({
// //     id: 1,
// //     user: 'bob',
// //     message: 'stop spying on us',
// //     room: 'whatever'
// //   })
// //   .then(messages => {
// //     console.log(messages.get('user'));
// //     console.log(messages.get('message'));
// //   });




// module.exports = {
//   messages: {
//     get: function(callback) {
//       db.sync().then(function() {
//         Messages.findAll().then(function(messages) {
//           callback(messages);
//         })
//       });
//       // return db.query('SELECT * FROM messages', function(error, results) {
//       //   if (error) {
//       //     console.log('ERROR 2');
//       //   } else {
//       //     callback(results);
//       //   }
//       // });
//     }, // a function which produces all the messages
//     post: function(req, callback) {
//       return db.query('insert into messages set ?', req, function(error, results) {
//         if (error) {
//           console.log('error writing message, line 17', error);
//         } else {
//           callback(results);
//         }
//       });
//     } // a function which can be used to insert a message into the database

//   },
//   users: {
//     // Ditto as above.
//     get: function() {},
//     post: function() {}
//   }
// };
