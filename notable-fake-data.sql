INSERT INTO user (username, password, firstname, lastname)
VALUES ('batman', '1AmVengeance!', 'Bruce', 'Wayne'),
('robin', 'Th3B0yW0nder!', 'Tim', 'Drake'),
('nightwing', 'F1y1ngH1gh!', 'Richard', 'Grayson'),
('user', 'password', 'Jon', 'Jones'),
('spidey', 'm1les', 'Jordan','Glover');

INSERT INTO data (user, date, name)
VALUES (1,'2020-11-03 02:00:00','Shopping List'),
(2,'2020-11-04 23:30:10','Reading List'),
(3,'2020-11-05 08:40:30','Call Your Friends'),
(4,'2020-11-07 07:22:22','My Note'),
(5, '2020-11-13 16:04:00', 'Suit Ideas');
-- (5, '2020-11-13 16:04:00', 'Gadget Ideas')

INSERT INTO note (name, text, dataref, img)
VALUES ('Shopping List', 'Eggs\r\nMilk\r\nBacon\r\nTitanium\r\nNth Metal\r\nCheese\r\n', 100, 'Aldi'),
('Reading List', 'The Detective''s Gambit\r\nTower of Babel\r\nBatman Beyond\r\nBatman: Year One\r\n', 101, 'Books-A-Million'),
('Call Your Friends', 'Call List:\r\nKory\r\nRory\r\nWally\r\nHarley\r\nJason (oh boy)\r\n', 102, 'iPhone'),
('My Note', 'Start typing your note here!', 103, 'Notebook'),
('Suit Ideas', 'Red and black is cool, but what about black and blue!', 104,'Suit');
-- ('Gadget Ideas_note', 'Perceision Venom Blast tethers!!! Phew! That will be cool!', 105, 'Gadget')

INSERT INTO image (data, src, name)
VALUES (100,'/img/jl.jpg','Shopping List'),
(101,'/img/sherlock.jpg','Reading List'),
(102,'/img/andFriends.jpg','Call Your Friends'),
(103,'/img/myImage.jpg','My Note'),
(104,'/img/risingSuit.jpg','Suit Ideas');
-- (105,'/img/risingSuit.jpg','Gadget Ideas_image')