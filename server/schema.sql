CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY AUTO_INCREMENT,
  user INT unsigned NOT NULL,
  message VARCHAR(140) NOT NULL,
  room INT unsigned NOT NULL,
  foreign key (user) references users (id),
  foreign key (room) references rooms (id)
);
-- figure out what the int, varchar, not null, etc. mean

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL
);
--
CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR(100) NOT NULL
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
