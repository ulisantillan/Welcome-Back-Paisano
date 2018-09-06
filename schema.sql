DROP DATABASE IF EXISTS sources;

CREATE DATABASE sources;

USE sources;

CREATE TABLE resources (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(100) NOT NULL,
  url varchar(75) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 *  command list for mysql:
 *	http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.html*/

INSERT INTO items (name, description, url) VALUES ("Hola<code/>", "Community that will help immigrants refugees, by providing aid and education", "http://www.holacode.com");
INSERT INTO items (name, description, url) VALUES ("Otros Dream in Action", "Mutual support to young people who grew up in the US", "http://www.odamexico.org");
INSERT INTO items (name, description, url) VALUES ("Pocho House", "Services and help to re-integrate to Mexico", "http://www.newcomienzos.org");
INSERT INTO items (name, description, url) VALUES ("Seguro de desempleo", "Get fiancial assistance while looking for a job in Mexico", "http://www.segurodedesempleo.cdmx.gob.mx/requisitios_migrantes.php");
INSERT INTO items (name, description, url) VALUES ("CDMX sedrec", "secreatry of goverment where you can obtain your ID", "https://www.sederec.cdmx.gob.mx/secretaria/tramita-tu-tarjeta-sederec");


CREATE TABLE teamMembers (

)
