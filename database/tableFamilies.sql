CREATE TABLE Families(
    id INT(180) NOT NULL,
    familyName VARCHAR(180) NOT NULL
);

ALTER TABLE Families 
    ADD PRIMARY KEY(id);

ALTER TABLE Families
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;