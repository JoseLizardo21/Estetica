CREATE TABLE stockmovements(
    id INT(11) NOT NULL,
    idMovement INT(120) NOT NULL,
    author VARCHAR(120) NOT NULL,
    product VARCHAR(120) NOT NULL,
    nameMovement VARCHAR(120) NOT NULL,
    cantidad INT(120) NOT NULL,
    create_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE stockmovements
    ADD PRIMARY KEY (id);

ALTER TABLE stockmovements
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;