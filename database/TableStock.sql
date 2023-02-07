CREATE TABLE stock(
    id INT(180) NOT NULL,
    productName VARCHAR(80) NOT NULL,
    price FLOAT(80,4) NOT NULL,
    code VARCHAR(80) NOT NULL,
    category VARCHAR(80) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    currentStock INT(80) NOT NULL,
    minimumStock INT(80) NOT NULL
);

ALTER TABLE stock 
    ADD PRIMARY KEY(id);

ALTER TABLE stock
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;