INSERT INTO `mydb`.`users`(firstName, lastName, email, password, role) VALUES
  ('Kaalikas', 'Porgand', 'kaalikas@porgand.ee', '$2b$10$78lt0Bh8WpDSgGHjpK1O/eAONiDX8lA8PzTfRkga91MxBhZkvDASC', 'Admin'),
  ('Juku', 'Juurikas', 'juku@juurikas.ee', '$2b$10$DgO4i4EwpiQHW6Rd5ww6BeVIsDTj56J.6TQ9lnqBohswLvqAl1aCK', 'User');
INSERT INTO `mydb`.`jobs` (`lat`, `lng`, `note`, `completion`,`users_id`) VALUES 
('53','23','Puu on liinil', 0, 1),
('51','26','Puu on siin ka liinil', 1, 2);