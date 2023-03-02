/* tabla para trabajador */
CREATE TABLE trabajador(
    id INT NOT NULL,
    nombres VARCHAR(30) NOT NULL,
    apellidos VARCHAR(30) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(80) NOT NULL,
    id_tipo_Trabajador INT NOT NULL,
    id_estado INT NOT NULL,
    fecha_nacimiento VARCHAR(20) NOT NULL,
    celular INT,
    direccion VARCHAR(80) NOT NULL,
    id_documento INT NOT NULL,
    documento INT NOT NULL
);


/* tabla para estado del trabajador */
CREATE TABLE estado(
    id INT NOT NULL,
    estado_descripcion VARCHAR(20)
);

/* tabla para ocupacion del trabajador */

CREATE TABLE tipoTrabajador(
    id INT NOT NULL,
    tipo VARCHAR(30) NOT NULL
);

/* tabla para documento de trabajador y cliente */
CREATE TABLE tipo_documento(
    id INT NOT NULL,
    documento VARCHAR(10) NOT NULL
);

/* llaves primarias*/
ALTER TABLE trabajador
    ADD PRIMARY KEY(id);

ALTER TABLE estado
    ADD PRIMARY KEY(id);

ALTER TABLE tipoTrabajador
    ADD PRIMARY KEY(id);

ALTER TABLE tipo_documento
    ADD PRIMARY KEY(id);

/* autoincrementables */
ALTER TABLE trabajador
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE estado  
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


ALTER TABLE tipoTrabajador
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE tipo_documento
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

/* llaves foraneas */
ALTER TABLE trabajador  
    ADD CONSTRAINT fk_id_estado FOREIGN KEY (id_estado) REFERENCES estado(id),
    ADD CONSTRAINT fk_id_documento FOREIGN KEY (id_documento) REFERENCES tipo_documento(id),
    ADD CONSTRAINT fk_id_tipo_trabajador FOREIGN KEY(id_tipo_Trabajador) REFERENCES tipoTrabajador(id);


/* vistas */
CREATE VIEW datosTrabajador as
select trabajador.nombres,
		trabajador.apellidos,
        trabajador.email,
        trabajador.fecha_nacimiento,
        tipoTrabajador.tipo AS tipo_trabajador,
        tipo_documento.documento AS tipo_Documento,
        trabajador.documento,
        trabajador.celular
 from trabajador
	INNER JOIN tipoTrabajador on trabajador.id_tipo_trabajador = tipoTrabajador.id
    INNER JOIN tipo_documento on trabajador.id_documento = tipo_documento.id;


/* creacion de registros necesarios para el promgrama */

/* creacion de registros para tipoTrabajador */
INSERT INTO tipoTrabajador (tipo) VALUES ("SuperAdmin");
INSERT INTO tipoTrabajador (tipo) VALUES ("Administrador");
INSERT INTO tipoTrabajador (tipo) VALUES ("Trabajador");

/* creacion de registros para tipo_documento */
INSERT INTO tipo_documento (documento) VALUES ('DNI');
INSERT INTO tipo_documento (documento) VALUES ('pasaporte');

/* creacion de registros para estado */
INSERT INTO estado (estado_descripcion) VALUES ('Activo');


/* craecion de un registro de una cuenta por defecto */
INSERT INTO trabajador (nombres, apellidos, email, fecha_nacimiento, id_documento, id_tipo_Trabajador, id_estado, password, direccion, documento, celular) values ('SuperAdmin', '.', 'admin@gmail.com', '21/11/2002', 1, 1, 1, '$2a$10$9tlh/Viiu9fGD6ZrI0S.EemPC2eVVtuEye9uSceon2pSJb0QlvWea', 'av.arequipa', 77067906, 252535241);