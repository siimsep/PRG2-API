INSERT INTO `mydb`.`users`(firstName, lastName, email, password, role) VALUES
  ('Mari', 'Maasikas', 'mari@maasikas.ee', 'maasikas', 'Admin'),
  ('Juku', 'Juurikas', 'juku@juurikas.ee', 'juurikas', 'User');
INSERT INTO `mydb`.`jobs` (`lat`, `lng`, `note`, `completion`,`users_id`) VALUES 
('53','23','Puu on liinil', 0, 1),
('51','26','Puu on siin ka liinil', 1, 2);