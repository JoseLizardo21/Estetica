CREATE DATABASE appEstetica;
USE appEstetica;

CREATE TABLE users(
    id INT(180) NOT NULL,
    username VARCHAR(22) NOT NULL,
    email VARCHAR(80) NOT NULL,
    dni INT(8) NOT NULL,
    typeUser VARCHAR(80) NOT NULL,
    password VARCHAR(200) NOT NULL,
    create_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE users 
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;