DROP DATABASE IF EXISTS lapizza;
CREATE DATABASE IF NOT EXISTS lapizza;
USE lapizza;

    CREATE TABLE producto(
        codigo INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
        nombre VARCHAR(30) NOT NULL,
        precio decimal(9,2) NOT NULL,
        descripcion VARCHAR(60) NOT NULL,
        image VARCHAR(10)
    );

        INSERT INTO producto(codigo, nombre, precio, descripcion, image) VALUES 
            (1,"Napolitana", '25', "Incluye queso mozarella, salsa de tomate y albahaca ", CONCAT(codigo, '.jpg')), 
            (2,"Hawaiana", '35', "Incluye queso mozarella, salsa de tomate, jamon y piña", CONCAT(codigo, '.jpg')),
            (3,"Funghi", '40', "Incluye queso, salsa de tomate y champiñones", CONCAT(codigo, '.jpg'));