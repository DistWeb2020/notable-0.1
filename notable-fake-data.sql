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

INSERT INTO note (name, text, dataref)
VALUES ('Shopping List_note', 'Eggs\r\nMilk\r\nBacon\r\nTitanium\r\nNth Metal\r\nCheese\r\n', 1),
('Reading List_note', 'The Detective''s Gambit\r\nTower of Babel\r\nBatman Beyond\r\nBatman: Year One\r\n', 2),
('Call Your Friends_note', 'Call List:\r\nKory\r\nRory\r\nWally\r\nHarley\r\nJason (oh boy)\r\n', 3),
('My Note_note', 'Start typing your note here!', 4),
('Suit Ideas_note', 'Red and black is cool, but what about black and blue!', 5);

INSERT INTO image (data, src, name)
VALUES (1,'/img/jl.jpg','Shopping List_image'),
(2,'/img/sherlock.jpg','Reading List_image'),
(3,'/img/andFriends.jpg','Call Your Friends_image'),
(4,'/img/myImage.jpg','My Note_image'),
(5,'/img/risingSuit.jpg','Suit Ideas_image');