------------------------------------------------ erase everything ------------------------------------------------

-- products --
DELETE FROM database_ovs.products;
ALTER TABLE database_ovs.products AUTO_INCREMENT=1;

-- users --
DELETE FROM database_ovs.users;
ALTER TABLE database_ovs.users AUTO_INCREMENT=1;

-- categories --
DELETE FROM database_ovs.categories;
ALTER TABLE database_ovs.categories AUTO_INCREMENT=1;

-- role --
DELETE FROM database_ovs.role;
ALTER TABLE database_ovs.role AUTO_INCREMENT=1;

-- carts --
-- cartsProducts --

------------------------------------------------ populate everything ------------------------------------------------

-- categories --
INSERT INTO database_ovs.categories (id, category_name) VALUES
(1, "Selecciones"), (2, "Equipos Amerianos"), (3, "Equipos Europeos"), (4, "Resto del Mundo");

-- role --
INSERT INTO database_ovs.role (id, name ) VALUES
(1, "Admin"), (2, "Cliente");

-- products --
INSERT INTO database_ovs.products VALUES 
(DEFAULT, "Camiseta River Plate", "Camiseta titular", 10000, "M" , "Disponible", "Nuevo", "Destacado", 2, "camiseta river.jpg"),
(DEFAULT, "Camiseta Racing Club", "Camiseta titular", 9000, "S" , "Disponible", "Nuevo", "Destacado", 2, "camiseta racing.jpg"),
(DEFAULT, "Camiseta Real Madrid", "Camiseta titular", 12000, "L" , "Agotado", "Usado", "Oferta", 3, "camiseta real madrid.jpg"),
(DEFAULT, "Camiseta Selección de Nigeria", "Camiseta titular", 7500, "S" , "Disponible", "Nuevo", "Oferta", 1, "camiseta nigeria.jpg"),
(DEFAULT, "Camiseta Selección Argentina", "Camiseta titular", 13000, "M" , "Agotado", "Usado", "Destacado", 1, "camiseta-argentina.jpg"),
(DEFAULT, "Camiseta Shandong Taishan", "Camiseta titular", 6000, "L" , "Agotado", "Usado", "Oferta", 4, "camiseta shandong taishan.jpg"),
(DEFAULT, "Camiseta Yokohama", "Camiseta titular", 8000, "L" , "Disponible", "Usado", "Oferta", 4, "camiseta yokohama.jpg"),
(DEFAULT, "Camiseta PSG", "Camiseta titular", 10000, "S" , "Agotado", "Nuevo", "Destacado", 3, "camiseta psg.jpg"),
(DEFAULT, "Camiseta Boca Juniors", "Camiseta titular", 9000, "L" , "Disponible", "Usado", "Oferta", 2, "camiseta boca.jpg"),
(DEFAULT, "Camiseta Manchester City", "Camiseta titular", 11000, "M" , "Agotado", "Usado", "Oferta", 3, "camiseta manchester city.jpg"),
(DEFAULT, "Camiseta Selección Alemana", "Camiseta titular", 14000, "S" , "Disponible", "Nuevo", "Destacado", 1, "camiseta alemana.jpg"),
(DEFAULT, "Camiseta Barcelona", "Camiseta titular", 12000, "L" , "Agotado", "Usado", "Disponible", 3, "barcelona 2018.jpg"),
(DEFAULT, "Camiseta Atletico Mineiro", "Camiseta titular", 9000, "L" , "Disponible", "Usado", "Destacado", 2, "camiseta atletico mineiro.jpg"),
(DEFAULT, "Camiseta Bayer Munich", "Camiseta titular", 13000, "M" , "Agotado", "Nuevo", "Destacado", 3, "camiseta bayer munich.jpg"),
(DEFAULT, "Camiseta Selección Colombiana", "Camiseta titular", 11000, "L" , "Disponible", "Usado", "Destacado", 1, "camiseta colombiana.jpg"),
(DEFAULT, "Camiseta Fenerbache", "Camiseta titular", 9500, "L" , "Disponible", "Nuevo", "Oferta", 4, "camiseta fenerbache.jpg"),
(DEFAULT, "Camiseta America Cali", "Camiseta titular", 8000, "S" , "Disponible", "Nuevo", "Oferta", 2, "america cali.jpg");


-- users --
INSERT INTO database_ovs.users VALUES 
(DEFAULT, "Administrador", "E-commerce", "admin@gmail.com", "Padre Lozano 478", "Argentino", "1990-01-01", "Racing Club", "$2a$10$csN1pQRb36oEutC4O82y5e/Eat4vhzDU2TXf7CQLcitxlBBZ7.WsG", "Si", "admin.jpg", 1),
(DEFAULT, "Cliente", "E-commerce", "cliente@gmail.com", "Alte Brown 123", "Argentino", "1987-01-01", "River Plate", "$2a$10$csN1passwordpQRb36oEutC4O82y5e/Eat4vhzDU2TXf7CQLcitxlBBZ7.WsG", "Si", "cliente.jpg", 1);

-- carts --
-- cartsProducts --