USE venta_ropa;

CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO administradores (email, password, activo)
VALUES ('julioa@gmail.com', '2020Julio*', TRUE);

INSERT INTO administradores (email, password, activo)
VALUES ('luciano@gmail.com', '2020Luciano*', TRUE);

INSERT INTO administradores (email, password, activo)
VALUES ('dario@gmail.com', '2020Dario*', TRUE);

INSERT INTO administradores (email, password, activo)
VALUES ('gilberto@gmail.com', '2020Gilberto*', TRUE);