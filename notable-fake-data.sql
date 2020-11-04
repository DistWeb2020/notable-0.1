INSERT INTO user
VALUES (1, 'batman', '1AmVengeance!', 'Bruce', 'Wayne'),
(2, 'robin', 'Th3B0yW0nder!', 'Tim', 'Drake'),
(3, 'nightwing', 'F1y1ngH1gh!', 'Richard', 'Grayson'),
(4, 'user', 'password', 'Jon', 'Jones');

INSERT INTO data
VALUES (1,1,'2020-11-03 02:00:00','Shopping List'),
(2,2,'2020-11-04 23:30:10','Reading List'),
(3,3,'2020-11-05 08:40:30','Call Your Friends'),
(4,4,'2020-11-07 07:22:22','My Note');

INSERT INTO note
VALUES (1, 'Shopping List_text', '• Eggs\r\n• Milk\r\n• Bacon\r\n• Titanium\r\n• Nth Metal\r\n• Cheese\r\n', 1),
(2, 'Reading List_text', '• The Detective''s Gambit\r\n• Tower of Babel\r\n• Batman Beyond\r\n• Batman: Year One\r\n', 2),
(3, 'Call Your Friends_text', 'Call List:\r\n• Kory\r\n• Rory\r\n• Wally\r\n• Harley\r\n• Jason (oh boy)\r\n', 3),
(4, 'My Note_text', 'Start typing your note here!', 4);

INSERT INTO image
VALUES (1,1,'/img/jl.jpg','Shopping List_image'),
(2,2,'/img/sherlock.jpg','Reading List_image'),
(3,3,'/img/andFriends.jpg','Call Your Friends_image'),
(4,4,'/img/myImage.jpg','My Note_image');